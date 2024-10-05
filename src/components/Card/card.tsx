import React from "react";
import "./card.css";
import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";

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
      <CardHeader name={`City - ${city.name}`}></CardHeader>
      <CardContent location={`Location - ${city.location}`}></CardContent>
      <CardFooter population={`Population - ${city.population}`}> </CardFooter>
      <br></br>
      <h2> Country - {country.name}</h2>
      <h2> Population - {country.population}</h2>
      <h2> Capital - {country.capital}</h2>
    </div>
  );
};

export default card;
