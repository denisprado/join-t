import { supabaseDataProvider } from "ra-supabase-core";
import { withLifecycleCallbacks } from "react-admin";
import { supabase as supabaseClient } from "./supabase";

export const baseDataProvider = supabaseDataProvider({
  instanceUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  apiKey: process.env.NEXT_PUBLIC_ANON_KEY!!,
  supabaseClient,
});

export const dataProvider = withLifecycleCallbacks(baseDataProvider, [
  {
    resource: "activity_groups",
    beforeUpdate: async (params, dataProvider): Promise<any> => {
      try {
        let images: ({ title: string; src: string } | null)[] = [];
        const uploadPromises =
          params &&
          params?.data &&
          Array.isArray(params?.data?.images) &&
          params?.data?.images?.map(
            async (
              image: {
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
              },
              index: any
            ) => {
              const title = `${index}_${image.title}`;

              const { data, error } = await supabaseClient.storage
                .from("media")
                .upload(`images/${title}`, image.rawFile, {
                  cacheControl: "3600",
                  upsert: false,
                });

              !error
                ? images.push({
                    title: title,
                    src:
                      "https://ketmurptstbkqaelmumc.supabase.co/storage/v1/object/public/media/images/" +
                      title,
                  })
                : null;
            }
          );
        // Aguarde o término de todos os uploads
        console.log("as imagens", images);
        uploadPromises && (await Promise.all(uploadPromises));
        // O resultado da operação de upload está em 'response', você pode processar conforme necessário

        return {
          ...params,
          data: { ...params.data, image: images, video: images },
        };
      } catch (error) {
        // Trate os erros conforme necessário
        console.error("Erro durante o upload:", error);
        return {
          error: "Erro durante o upload",
        };
      }
    },
  },
]);
