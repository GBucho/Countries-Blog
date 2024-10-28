import { useParams } from "react-router-dom";
import country from "../../components/Card/static/data";
import "./single.css";
import { Container } from "~/src/components/base/container/container";
import { getTranslationContent } from "../../components/Card/static/language";

const SingleArticleView = () => {
  const { id, lang } = useParams();
  // const params = useParams();
  // const lang = params.lang as string;
  const itemTranslation = getTranslationContent(lang);

  // const countryDescription = getTranslationCountry(lang);
  const notFound = getTranslationContent(lang);

  const selectedCountry = () => {
    return country[lang as "en" | "ka"].find((mycountry) => mycountry.id == id);
  };

  if (!selectedCountry) {
    return <div> {notFound("notfound")}</div>;
  }

  return (
    <Container>
      <div className="country-details">
        <span>
          {itemTranslation("name")} - {selectedCountry()?.name}
        </span>
        <span>
          {" "}
          {itemTranslation("population")} - {selectedCountry()?.population}{" "}
        </span>
        <span>
          {" "}
          {itemTranslation("capital")} - {selectedCountry()?.capital}{" "}
        </span>
      </div>
    </Container>
  );
};
export default SingleArticleView;
