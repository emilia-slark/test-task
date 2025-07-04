export const API_URL = `${process.env.REACT_APP_API_ORIGIN}`;
export const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export enum LABEL {
  ERROR = "Произошла ошибка",
  NO_RESULT = "Ничего не найдено...",
  CATALOG_INPUT_PLACEHOLDER = "Фильм называется...",
  MORE_DETAILS = "Подробнее",
  SEARCH = "Поиск",
  FAVORITES = "Избранное",
  NO_DATA = "Нет данных"
}