import { Plans } from "@/types";

export default function groupBy<T>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  return (
    array &&
    array.reduce((grouped, item) => {
      const keyValue = item[key] as string;
      const itemWithoutKey = { ...item };

      if (!grouped[keyValue]) {
        grouped[keyValue] = [];
      }

      grouped[keyValue].push(itemWithoutKey);

      return grouped;
    }, {} as Record<string, T[]>)
  );
}

// Função para converter valores de string para números
export const convertToNumeric = (value: string): number =>
  parseFloat(value.replace("R$", "").replace(",", "."));

// Função para encontrar o menor valor entre todos os preços
export const findMinValue = (plans: Plans[]): number => {
  const allPrices: number[] =
    plans &&
    plans.reduce((accumulator: number[], plan: Plans) => {
      const prices = plan.prices as { value: string }[];
      const planPrices = prices!.map((price) => convertToNumeric(price.value));
      return accumulator.concat(planPrices);
    }, []);

  return allPrices && Math.min(...allPrices);
};

export const getArrayOfImages = (images: string[] | null) => {
  // Definindo a expressão regular para extrair o JSON
  interface ImageData {
    rawFile: {
      path: string;
    };
    src: string;
    title: string;
  }

  const regex = /({.*})/;

  // Convertendo cada string JSON em um objeto JavaScript
  const arrayDeObjetos: (ImageData | null)[] | null =
    images &&
    images
      .map((str) => {
        // Extrair o JSON válido da string
        const match = str.match(regex);
        if (match) {
          // Analisar o JSON
          return JSON.parse(match[0]) as ImageData;
        }
        return null;
      })
      .filter((objeto) => objeto !== null);

  const arrayImages: string[] | null =
    arrayDeObjetos &&
    arrayDeObjetos.map(
      (objeto) =>
        objeto!.rawFile &&
        process.env.NEXT_PUBLIC_SUPABASE_STORAGE + "/" + objeto!.rawFile.path
    );
  return arrayImages;
};
