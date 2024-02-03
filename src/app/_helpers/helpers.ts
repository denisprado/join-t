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
