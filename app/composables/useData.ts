/**
 * Хук для получения локальных данных из JSON-файла.
 *
 * 🔄 Данные загружаются **один раз** и хранятся в `useState`.
 *
 * @returns {DataType} Структура данных из JSON.
 */
import jsonData from "~/assets/data/data.json";

export const useData = (): DataType => {
  return useState<DataType>("appData", () => jsonData).value!;
};
type DataType = typeof jsonData;
