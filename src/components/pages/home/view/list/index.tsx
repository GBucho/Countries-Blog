import Hero from "../../components/Hero/hero";
import { lazy } from "react";

const country = {
  name: "Georgia",
  population: "3.71 million",
  capital: "Tbilisi",
};

const city = {
  name: "Tbilisi",
  population: "1.26 million",
  location: "Europe",
};

const LazyCardHeader = lazy(
  () => import("../../components/Card/CardHeader/CardHeader")
);

const LazyCardContent = lazy(
  () => import("../../components/Card/CardContent/CardContent")
);

const LazyCardFooter = lazy(
  () => import("../../components/Card/CardFooter/CardFooter")
);

const ArticlesListView = () => {
  return (
    <>
      <div className="card-content">
        <Hero />
        <LazyCardHeader name={`City - ${city.name}`}></LazyCardHeader>
        <LazyCardContent
          location={`Location - ${city.location}`}
        ></LazyCardContent>
        <LazyCardFooter
          population={`Population - ${city.population}`}
        ></LazyCardFooter>
        <br></br>
        <h2> Country - {country.name}</h2>
        <h2> Population - {country.population}</h2>
        <h2> Capital - {country.capital}</h2>
      </div>
    </>
  );
};

export default ArticlesListView;
