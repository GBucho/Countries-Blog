import { FormEvent, useEffect } from "react";
import Article from "../article/article";
import CardHeader from "../CardHeader/CardHeader";
import "./article-list.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import CountryCreateForm from "../country-create-form/country-create-form";
import { getTranslationContent } from "../static/language";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import {
  createCountry,
  deleteCountry,
  getCountries,
  upvoteCountry,
} from "~/src/api/countries";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useWindowSize } from "react-use";

export interface Country {
  id: string;
  name: string;
  population: string;
  capital: string;
  image: string;
  vote: number;
}
const ArticleList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = useParams().lang as "ka" | "en";
  const t = getTranslationContent(lang);
  const params = useParams();
  const { width } = useWindowSize();
  const sortOrder = searchParams.get("sort") || "asc";

  const {
    status,
    data,
    refetch,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: ({ pageParam }) =>
      getCountries(sortOrder as "asc" | "desc", { page: pageParam, limit: 10 }),
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 1,
  });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];

  const rowVirtualizer = useWindowVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    estimateSize: () => (width <= 768 ? 800 : 348),
    overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  useEffect(() => {
    const [lastItem] = [...virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    virtualItems,
  ]);
  //---------------------------------------------------

  const { mutate } = useMutation({ mutationFn: deleteCountry });
  const createMutate = useMutation({ mutationFn: createCountry });
  const { mutate: upvoteMutate } = useMutation({ mutationFn: upvoteCountry });

  const handleCreateCountry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const countryObject: any = {};
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData) {
      countryObject[key] = value;
    }

    if (countryObject.capital.length < 3) {
      alert("double check please the Capital length");
    }

    createMutate.mutate(countryObject, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  const handleSort = (newSortOrder: "asc" | "desc") => {
    setSearchParams({ sort: newSortOrder });
  };

  const handleUpvote = (id: string) => {
    console.log("Upvoting country with id:", id); // Debugging line
    upvoteMutate(id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="vote-stats">
        <button onClick={() => handleSort("asc")}>Sort Ascending</button>
        <button onClick={() => handleSort("desc")}>Sort Descending</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CountryCreateForm onCountryCreate={handleCreateCountry} />
      </div>
      <section className="country-list">
        {virtualItems?.map((mycountry: Country) => {
          <Article key={mycountry.id}>
            <CardHeader
              name={`${mycountry.name}`}
              onUpVote={() => handleUpvote(mycountry.id)}
              voteCount={mycountry.vote}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <span>
                <Link
                  style={{
                    color: "blue",
                    textDecoration: "none",
                    fontSize: 24,
                  }}
                  to={`${mycountry.id}`}
                >
                  {t("moreinfo")}
                </Link>
              </span>

              <span
                style={{
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => {
                  mutate(mycountry.id, {
                    onSuccess: () => {
                      refetch();
                    },
                  });
                }}
              >
                Delete
              </span>
            </div>
          </Article>;
        })}
        <div>
          {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
        </div>
      </section>
    </>
  );
};

export default ArticleList;
