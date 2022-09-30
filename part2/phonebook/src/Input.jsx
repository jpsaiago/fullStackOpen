import { postPerson, putPerson } from "./services/server";
import { useState } from "react";

export default function Input({ persons, setShouldUpdate, setNotification }) {
  const [newPerson, setNewPerson] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setNewPerson({ ...newPerson, [event.target.name]: event.target.value });
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
      ) === true
    ) {
      if (window.confirm("Quer atualizar esse número?")) {
        const matchingId = persons.find(
          (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
        );
        putPerson(matchingId.id, newPerson)
          .then(() => {
            setNotification({
              message: "Número atualizado com sucesso",
              contentCode: "success",
            });
            setShouldUpdate(true);
            setTimeout(() => {
              setNotification({
                message: "",
                contentCode: "",
              });
            }, 5000);
          })
          .catch(() => {
            setNotification({
              message: `${newPerson.name} já foi excluído da lista`,
              contentCode: "error",
            });
            setShouldUpdate(true);
            setTimeout(() => {
              setNotification({
                message: "",
                contentCode: "",
              });
            }, 5000);
          });
      }
    } else {
      postPerson(newPerson).then(() => {
        setNotification({
          message: `${newPerson.name} adicionado com sucesso`,
          contentCode: "success",
        });
        setShouldUpdate(true);
        setTimeout(() => {
          setNotification({
            message: "",
            contentCode: "",
          });
        }, 5000);
      });
    }
    setNewPerson({ name: "", phoneNumber: "" });
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
          value={newPerson.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />{" "}
        <button type="submit">add</button>
      </form>
    </>
  );
}
