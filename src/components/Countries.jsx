import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countriesData) => setCountries(countriesData))
      .catch((error) => console.log(error));
  }, []);

  console.log("countries", countries);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {countries.map((country) => (
          <div
            key={country.car.ccn3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "1rem",
              margin: "0.5rem",
              height: "250px",
              width: "200px",
            }}
          >
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              style={{ width: "150px", height: "200px" }}
            />
            <h4>{country.name.common}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
