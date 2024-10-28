export const countryReducer = (
  countryList: {
    name: string;
    population: string;
    capital: string;
    id: string;
    vote: number;
    deleted: boolean;
    originalIndex: number;
    // image: string;
  }[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any,
) => {
  if (action.type === "upvote") {
    const updatedCountriesList = countryList.map((mycountry) => {
      if (mycountry.id === action.payload.id) {
        return { ...mycountry, vote: mycountry.vote + 1 };
      }
      return { ...mycountry };
    });
    return updatedCountriesList;
  }

  if (action.type === "sort") {
    const copiedCountriesList = [...countryList];
    const sortedCountryList = copiedCountriesList.sort((a, b) => {
      return action.payload.sortType === "asc"
        ? a.vote - b.vote
        : b.vote - a.vote;
    });

    return sortedCountryList;
  }

  if (action.type === "create") {
    const updatedCountryList = [
      ...countryList,
      {
        ...action.payload.countryObject,
        vote: 0,
        id: (Number(countryList.at(-1)?.id) + 1).toString(),
        deleted: false,
      },
    ];

    return updatedCountryList;
  }

  if (action.type === "delete") {
    const updatedCountryList = countryList.map((mycountry, index) => {
      if (mycountry.id === action.payload.id) {
        return { ...mycountry, deleted: true, originalIndex: index };
      }
      return mycountry;
    });

    return updatedCountryList;
  }

  if (action.type === "restore") {
    const restoredCountryList = countryList.map((mycountry) => {
      if (mycountry.id === action.payload.id) {
        return { ...mycountry, deleted: false };
      }
      return mycountry;
    });

    const restoredCountry = restoredCountryList.find(
      (country) => country.id === action.payload.id,
    );

    const withoutRestoredCountry = restoredCountryList.filter(
      (country) => country.id !== action.payload.id,
    );

    if (restoredCountry?.originalIndex !== undefined) {
      withoutRestoredCountry.splice(
        restoredCountry.originalIndex,
        0,
        restoredCountry,
      );
    }

    return withoutRestoredCountry;
  }

  return countryList;
};
