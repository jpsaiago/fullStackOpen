import { useState, useEffect } from "react";
import Input from "./Input";
import Person from "./Person";
import Search from "./Search";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");
  const searchResults = persons.filter((person) => {
    if (person.name.toLowerCase().includes(search.toLowerCase())) {
      return person;
    } else {
      return null;
    }
  });
  const dbEffect = () => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      })
      .catch(() => {
        console.log("unable to fetch people");
      });
  };

  useEffect(dbEffect, []);
  return (
    <>
      <h1>Phonebook</h1>
      <hr />
      <Input
        persons={persons}
        setPersons={setPersons}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <h2>People</h2>
      <Search search={search} setSearch={setSearch} />
      {searchResults.map((value, index) => (
        <Person value={value} index={index} />
      ))}
    </>
  );
};

export default App;
