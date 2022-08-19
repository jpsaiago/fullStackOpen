import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
};

export default App;
