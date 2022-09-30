import axios from "axios";

const baseURL = "http://localhost:1337/api/persons/";

const getAll = () => {
  return axios.get(baseURL);
};

const postPerson = (newPerson) => {
  return axios.post(baseURL, newPerson);
};

const putPerson = (id, updatedPerson) => {
  return axios.put(baseURL + id, updatedPerson);
};

const deletePerson = (id) => {
  return axios.delete(baseURL + id);
};
export { getAll, postPerson, putPerson, deletePerson };
