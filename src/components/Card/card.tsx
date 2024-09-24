import "./card.css";

const country = {
  name: "Georgia",
  population: "3.71 million",
  capital: "Tbilisi",
};

export default function card() {
  return (
    <div className="card-content">
      <h2> Country - {country.name}</h2>
      <h2> Population - {country.population}</h2>
      <h2> Capital - {country.capital}</h2>
    </div>
  );
}
