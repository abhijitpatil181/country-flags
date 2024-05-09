import { useEffect, useState } from "react";
import Tile from "./Tile";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countriesData) => setCountries(countriesData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "100vh",
        }}
      >
        {countries.map((country) => (
          <Tile
            key={country.cca3}
            imgUrl={country.flags.svg}
            countryName={country.name.common}
            alt={country.flags.alt}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
