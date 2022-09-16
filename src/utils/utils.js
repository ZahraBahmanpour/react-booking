import {
  USER_NOT_FOUND,
  USER_NOT_FOUND_TRANSLATION,
  WRONG_PASSSWORD,
  WRONG_PASSSWORD_TRANSLATION,
} from "../firebase/firebase-errors";

export const transformRating = (rating) => {
  if (rating > 8.5) {
    return "Fantastic";
  }
  if (rating > 8) {
    return "Very Good";
  }
  if (rating > 7) {
    return "Good";
  }
  if (rating > 6) {
    return "Average";
  }
};

export const dollarUSLocale = Intl.NumberFormat("en-US");
export const DEFAULT_PAGE_SIZE = 5;
export const BASE_URL = "http://localhost:4000";
export const APP_URL = "http://localhost:3000";

export const generateQueryString = (page, filters) => {
  let baseQueryString = `?_page=${page}&_limit=${DEFAULT_PAGE_SIZE}`;
  if (filters) {
    for (let key in filters) {
      baseQueryString += `&${key}=${filters[key]}`;
    }
  }
  return baseQueryString;
};

export const handleFirebaseAuthErrors = (errorCode) => {
  switch (errorCode) {
    case USER_NOT_FOUND:
      return USER_NOT_FOUND_TRANSLATION;
    case WRONG_PASSSWORD:
      return WRONG_PASSSWORD_TRANSLATION;
    default:
      return "";
  }
};
