const countryEN = [
  {
    name: "Georgia",
    population: "3.71 million",
    capital: "Tbilisi",
    id: "1",
    vote: 0,
  },

  {
    name: "Germany",
    population: "84.552 million",
    capital: "Berlin",
    id: "2",
    vote: 0,
  },

  {
    name: "France",
    population: "66.575 million",
    capital: "Paris",
    id: "3",
    vote: 0,
  },

  {
    name: "England",
    population: "57 million",
    capital: "London",
    id: "4",
    vote: 0,
  },
];

const countryGE = [
  {
    name: "საქართველო",
    population: "3.71 მილიონი",
    capital: "თბილისი",
    id: "1",
    vote: 0,
  },

  {
    name: "გერმანია",
    population: "84.552 მილიონი",
    capital: "ბერლინი",
    id: "2",
    vote: 0,
  },

  {
    name: "საფრანგეთი",
    population: "66.575 მილიონი",
    capital: "პარიზი",
    id: "3",
    vote: 0,
  },

  {
    name: "ინგლისი",
    population: "57 მილიონი",
    capital: "ლონდონი",
    id: "4",
    vote: 0,
  },
];

const country = {
  ka: countryGE,
  en: countryEN,
};

export default country;
export const locales = Object.keys(country);

export const defaultLocale = "ka";

export function getTranslationCountry(lang?: string) {
  if (!lang || !locales.includes(lang)) {
    console.log("არ გვაქვს ასეთი ენა");
  }

  const selectedNamespace = country[lang as keyof typeof country];

  return (key: keyof (typeof country)["ka"]) => {
    return selectedNamespace[key];
  };
}
