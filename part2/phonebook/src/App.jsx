import { useState, useEffect } from "react";
import Input from "./Input";
import Person from "./Person";
import Search from "./Search";
import Notification from "./Notification";
import { getAll } from "./services/server";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState({
    message: "",
    contentCode: "",
  });
  const [search, setSearch] = useState("");
  const [shouldUpdate, setShouldUpdate] = useState(true);
  const searchResults = persons.filter((person) => {
    if (person.name.toLowerCase().includes(search.toLowerCase())) {
      return person;
    } else {
      return null;
    }
  });

  const dbEffect = () => {
    if (shouldUpdate) {
      getAll().then((response) => {
        setPersons(response.data);
        setShouldUpdate(false);
      });
    }
  };

  useEffect(dbEffect, [shouldUpdate]);
  return (
    <>
      <h1>Phonebook</h1>
      <hr />
      <Notification
        contentCode={notification.contentCode}
        message={notification.message}
      />
      <Input
        persons={persons}
        setPersons={setPersons}
        setShouldUpdate={setShouldUpdate}
        setNotification={setNotification}
      />
      <h2>People</h2>
      <Search search={search} setSearch={setSearch} />
      {persons
        ? searchResults.map((value, index) => (
            <Person
              value={value}
              key={index}
              setShouldUpdate={setShouldUpdate}
              setNotification={setNotification}
            />
          ))
        : null}
    </>
  );
};

export default App;
