import axios from "axios";

const baseURL =
  "https://fullstackopenexpress-production.up.railway.app/api/persons";

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
