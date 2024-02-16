import { supabaseDataProvider } from "ra-supabase-core";
import { supabase as supabaseClient } from "./supabase";
import { UpdateParams } from "react-admin";
import { Tables } from "@/types/generated.supabase";
import { v4 } from "uuid";

export const initialSupabaseDataProvider = supabaseDataProvider({
  instanceUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  apiKey: process.env.NEXT_PUBLIC_ANON_KEY!!,
  supabaseClient,
});

const resourcesWithUpload = ["activity", "activity_groups", "quote"];
const newId = v4();

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

            await uploadFile(title, image.rawFile);
          }
        );

        await Promise.all(uploadPromises).then(() => {
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
  create: async (resource: string, params: any): Promise<any> => {
    if (resourcesWithUpload.includes(resource)) {
      try {
        const uploadPromisesCreate = params.data.images.map(
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

            await uploadFile(title, image.rawFile);
          }
        );

        await Promise.all(uploadPromisesCreate).then(() => {
          return initialSupabaseDataProvider.create(resource, {
            data: {
              ...params.data,
              id: newId,
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
    return dataProvider.create(resource, params);
  },
};

const uploadFile = async (
  title: string,
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
    | URLSearchParams
) => {
  const { data, error } = await supabaseClient.storage
    .from("media")
    .upload(`images/${title}`, rawFile, {
      cacheControl: "3600",
      upsert: true,
    });
  if (error) {
    console.log("Error: ", error);
  }
  return data;
};
