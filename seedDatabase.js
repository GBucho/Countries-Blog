import fs from "fs";
import axios from "axios";

const COUNTRY_MODEL = {
  id: null,
  name: "",
  population: "",
  capital: "",
  image: "",
  vote: 0,
};

async function fetchAndProcessCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");

    const countries = response.data.map((country, index) => ({
      id: country.cca3 || index.toString(),
      name: country.name.common || "N/A",
      population: country.population ? country.population.toString() : "N/A",
      capital: country.capital ? country.capital[0] : "N/A",
      image: country.flags ? country.flags.svg || country.flags.png : "",
      vote: 0,
    }));

    const dbContent = {
      countries,
    };

    fs.writeFileSync("database.json", JSON.stringify(dbContent, null, 2));
    console.log("Database seeding complete. Data written to database.json");
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

fetchAndProcessCountries();
