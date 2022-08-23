import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");
  const filterPeople = (person) => {
    if (person.name.toLowerCase().includes(search.toLowerCase()) === true) {
      return person;
    }
  };
  const searchResults = persons.filter(filterPeople);
  /*-------------------------------------------------------------------------------------------------------*/
  const handleChange = (event) => {
    setNewPerson({ ...newPerson, [event.target.name]: event.target.value });
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name == newPerson) == true) {
      alert(`${newPerson} is already added to the phonebook`);
    } else {
      setPersons([
        ...persons,
        { name: newPerson.name, number: newPerson.number },
      ]);
    }
    setNewPerson({ name: "", number: "" });
  };
  return (
    <>
      <h1>Phonebook</h1>
      <hr />
      <h2>Add a new name</h2>
      <form onSubmit={handleAddPerson}>
        Name:{" "}
        <input
          type="text"
          value={newPerson.name}
          onChange={handleChange}
          name="name"
        />{" "}
        Number:{" "}
        <input
          type="text"
          value={newPerson.number}
          onChange={handleChange}
          name="number"
        />{" "}
        <button type="submit">add</button>
      </form>
      <h2>People</h2>
      <p>
        {" "}
        Search:{" "}
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          name="name"
        />
      </p>
      {searchResults.map((value, index) => (
        <p key={index}>
          Name: {value.name}, Number: {value.number}
        </p>
      ))}
    </>
  );
};

export default App;
