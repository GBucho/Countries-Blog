import { Country } from "~/src/pages/home/components/Card/article-list/article-list";
import { httpClient } from "..";

export const getCountry = async (id: string | number) => {
  try {
    const res = await httpClient.get<Country>(`/countries/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createCountry = (countryObject: Country) => {
  return httpClient.post("/countries", countryObject);
};

export const deleteCountry = async (id: string) => {
  try {
    await httpClient.delete(`/countries/${id}`);
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
function getNextPageNumber(relType: string, pagination: string) {
  const regex = new RegExp(`<[^>]*[?&]_page=(\\d+)[^>]*>; rel="${relType}"`);
  const match = pagination.match(regex);
  return match ? parseInt(match[1], 10) : null;
}

export const getCountries = async (
  sort: "asc" | "desc" = "asc",
  { page, limit }: { page: number; limit: number }
) => {
  try {
    const res = await httpClient.get<Country[]>(
      `/countries?_sort=likes&_order=${sort}&_page=${page}&_limit=${limit}`
    );
    return {
      rows: res.data,
      nextOffset: getNextPageNumber("next", res.headers.link),
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const upvoteCountry = (id: string) => {
  return httpClient.get<Country>(`/countries/${id}`).then((res) => {
    const updatedVote = res.data.vote + 1; // Increment the vote count by 1
    return httpClient.patch(`/countries/${id}`, {
      vote: updatedVote, // Send the updated vote count
    });
  });
};
