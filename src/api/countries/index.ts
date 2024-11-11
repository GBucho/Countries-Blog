// import { Country } from "~/src/pages/home/components/Card/article-list/article-list";
import { Country } from "~/src/pages/home/components/Card/article-list/article-list";
import { httpClient } from "..";

export const getCountries = () => {
  return httpClient.get("/countries").then((res) => res.data);
};

export const createCountry = (countryObject: Country) => {
  return httpClient.post("/countries", countryObject);
};

export const deleteCountry = (id: string | number) => {
  return httpClient.delete(`/countries/${id}`);
};
