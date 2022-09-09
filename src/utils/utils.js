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
