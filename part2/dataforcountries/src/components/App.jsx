import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Results from "./Results";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const filteredCountries = countries.filter((country) => {
    if (search === "") {
      return null;
    }
    if (country.name.common.toLowerCase().includes(search.toLowerCase())) {
      return country;
    }
    return null;
  });

  const countriesEffect = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch(() => {
        console.log("unable to fetch countries");
      });
  };

  useEffect(countriesEffect, []);
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Results filteredCountries={filteredCountries} search={search} />
    </>
  );
}
