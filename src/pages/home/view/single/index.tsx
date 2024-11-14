import { useParams } from "react-router-dom";
import "./single.css";
import { Container } from "~/src/components/base/container/container";
import { getTranslationContent } from "../../components/Card/static/language";
import { useState, useEffect } from "react";
import { Country } from "../../components/Card/article-list/article-list";
import { getCountry } from "~/src/api/countries";
import { useQuery } from "@tanstack/react-query";

const SingleArticleView = () => {
  const [myCountry, setMyCountry] = useState<Country | null>(null);

  const params = useParams();
  const id = params.id as string;
  const lang = params.lang as string;

  const itemTranslation = getTranslationContent(lang);
  const notFound = getTranslationContent(lang);

  const { data, isLoading, isError } = useQuery<Country>({
    queryKey: ["Country", id],
    queryFn: () => getCountry(id),
    retry: 0,
  });

  useEffect(() => {
    if (data) {
      setMyCountry(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading country details.</div>;
  if (!myCountry) return <div>{notFound("notfound")}</div>;

  return (
    <div>
      <Container>
        <div className="country-details">
          <span>
            {itemTranslation("name")} - {myCountry.name}
          </span>
          <span>
            {itemTranslation("population")} - {myCountry.population}
          </span>
          <span>
            {itemTranslation("capital")} - {myCountry.capital}
          </span>
        </div>
      </Container>
    </div>
  );
};

export default SingleArticleView;
