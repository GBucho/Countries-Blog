import { useParams } from "react-router-dom";
import "./single.css";
import { Container } from "~/src/components/base/container/container";
import { getTranslationContent } from "../../components/Card/static/language";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../../components/Card/article-list/article-list";

const SingleArticleView = () => {
  const [myCountry, setMyCountry] = useState<Country | null>(null);
  const { id, lang } = useParams();

  const itemTranslation = getTranslationContent(lang);

  const notFound = getTranslationContent(lang);

  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}`).then((responce) => {
      setMyCountry(responce.data);
      console.log(responce.data);
    });
  }, [id]);

  if (!myCountry) {
    return <div> {notFound("notfound")}</div>;
  }

  return (
    <Container>
      <div className="country-details">
        <span>
          {itemTranslation("name")} - {myCountry?.name}
        </span>
        <span>
          {" "}
          {itemTranslation("population")} - {myCountry?.population}{" "}
        </span>
        <span>
          {" "}
          {itemTranslation("capital")} - {myCountry?.capital}
        </span>
      </div>
    </Container>
  );
};
export default SingleArticleView;
