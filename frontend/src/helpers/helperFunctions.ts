export const findCarbonFootprintPerCapita = (country: string) => {
  if (country == "US") return 15.52;
  if (country == "UK") return 17.1;
  if (country == "AU") return 15.52;
  if (country == "GE") return 9.44;
  if (country == "SA") return 16.95;
  if (country == "IN") return 1.91;
  if (country == "CH") return 7.38;
  if (country == "SG") return 8.56;
  return 0;
};
