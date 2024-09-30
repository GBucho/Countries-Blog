import React from "react";
import "./card.css";
import CardContent from "./CardContent/CardContent";
import CardFooter from "./CardFooter/CardFooter";
import CardHeader from "./CardHeader/CardHeader";

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

const card: React.FC = () => {
  return (
    <div className="card-content">
      <CardHeader>
        <h2> City - {city.name}</h2>
      </CardHeader>
      <CardFooter>
        <h2> population - {city.population}</h2>
      </CardFooter>
      <CardContent>
        <h2> Location - {city.location}</h2>
      </CardContent>
      <br></br>
      <h2> Country - {country.name}</h2>
      <h2> Population - {country.population}</h2>
      <h2> Capital - {country.capital}</h2>
    </div>
  );
};

export default card;
