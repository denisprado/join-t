import { supabaseDataProvider } from "ra-supabase-core";
import { supabase as supabaseClient } from "./supabase";
import { UpdateParams } from "react-admin";
import { Tables } from "@/types/generated.supabase";

export const initialSupabaseDataProvider = supabaseDataProvider({
  instanceUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  apiKey: process.env.NEXT_PUBLIC_ANON_KEY!!,
  supabaseClient,
});

const resourcesWithUpload = ["activity", "activity_groups"];

export const dataProvider = {
  ...initialSupabaseDataProvider,
  update: async (resource: string, params: any): Promise<any> => {
    if (resourcesWithUpload.includes(resource)) {
      try {
        const uploadPromises = params.data.images.map(
          async (image: {
            title: any;
            rawFile:
              | string
              | ArrayBuffer
              | ArrayBufferView
              | Blob
              | Buffer
              | File
              | FormData
              | NodeJS.ReadableStream
              | ReadableStream<Uint8Array>
              | URLSearchParams;
          }) => {
            const title = image.title;

            const { data } = await supabaseClient.storage
              .from("media")
              .upload(`images/${title}`, image.rawFile, {
                cacheControl: "3600",
                upsert: true,
              });
          }
        );

        // Aguarde o término de todos os uploads
        await Promise.all(uploadPromises).then(() => {
          // O resultado da operação de upload está em 'response', você pode processar conforme necessário
          return initialSupabaseDataProvider.update(resource, {
            ...params,
            data: {
              ...params.data,
            },
          });
        });
      } catch (error) {
        // Trate os erros conforme necessário
        console.error("Erro durante o upload:", error);
        return {
          error: "Erro durante o upload",
        };
      }
    }
    return dataProvider.update(resource, params);
  },
};
