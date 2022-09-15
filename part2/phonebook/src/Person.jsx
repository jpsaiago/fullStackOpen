import { deletePerson } from "./services/server";

export default function Person({ value, setShouldUpdate, setNotification }) {
  return (
    <div style={{ display: "flex" }}>
      <p>
        Name: {value.name}, Number: {value.number}, ID: {value.id}
      </p>
      <button
        style={{ height: "1.5rem", alignSelf: "center", marginLeft: "1rem" }}
        onClick={() => {
          if (window.confirm("Delete this person?")) {
            deletePerson(value.id).then(() => {
              setNotification({
                message: "Contato excluído com sucesso",
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
        }}
      >
        Delete
      </button>
    </div>
  );
}
