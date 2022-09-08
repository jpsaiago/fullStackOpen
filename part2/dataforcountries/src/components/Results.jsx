import { useState } from "react";
import Country from "./Country";
import SearchOption from "./SearchOption";
import Weather from "./Weather";
import axios from "axios";

export default function Results({ filteredCountries }) {
  const [selectedCountry, setSelectedCountry] = useState();
  const [weatherData, setWeatherData] = useState();
  function handleWeather(capital) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {
        console.log("unable to fetch weather");
      });
  }

  if (selectedCountry) {
    return (
      <>
        <Country
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <Weather
          countryCapital={selectedCountry.capital[0]}
          weatherData={weatherData}
        />
      </>
    );
  }
  if (filteredCountries.length > 10) {
    return <p>Too many matches, can you be more specific?</p>;
  }
  if (filteredCountries.length === 0) {
    return <p>No matches found.</p>;
  }
  return (
    <>
      {filteredCountries.map((country, index) => {
        return (
          <SearchOption
            key={index}
            country={country}
            setSelectedCountry={setSelectedCountry}
            handleWeather={handleWeather}
          />
        );
      })}
    </>
  );
}
