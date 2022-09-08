import axios from "axios";
export default function Input({
  persons,
  setPersons,
  newPerson,
  setNewPerson,
}) {
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
      <h2>Add a new name</h2>
      <form onSubmit={handleAddPerson}>
        Name:{" "}
        <input
          required
          type="text"
          value={newPerson.name}
          onChange={handleChange}
          name="name"
        />{" "}
        Number:{" "}
        <input
          required
          type="text"
          value={newPerson.number}
          onChange={handleChange}
          name="number"
        />{" "}
        <button type="submit">add</button>
      </form>
    </>
  );
}
