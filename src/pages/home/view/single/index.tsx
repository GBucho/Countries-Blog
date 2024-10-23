import { useParams } from "react-router-dom";
import country from "../../components/Card/static/data";
import "./single.css";
import { Container } from "~/src/components/base/container/container";
import { getTranslationContent } from "../../components/Card/static/language";

const SingleArticleView = () => {
  const { id, lang } = useParams();

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
        <span> Name - {selectedCountry()?.name} </span>
        <span> Population - {selectedCountry()?.population} </span>
        <span> Capital - {selectedCountry()?.capital} </span>
      </div>
    </Container>
  );
};
export default SingleArticleView;
