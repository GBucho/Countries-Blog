import { useParams } from "react-router-dom";
import country from "../../components/Card/static/data";
import "./single.css";

const SingleArticleView = () => {
  const { id } = useParams();

  const selectedCountry = country.find((mycountry) => mycountry.id == id);

  if (!selectedCountry) {
    return <div>Article Not Found</div>;
  }

  return (
    <div className="country-details">
      <span> Name - {selectedCountry.name} </span>
      <span> Population - {selectedCountry.population} </span>
      <span> Capital - {selectedCountry.capital} </span>
    </div>
  );
};
export default SingleArticleView;
