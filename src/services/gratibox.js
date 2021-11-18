import axios from "axios";

const URL = "http://localhost:4000";

function setConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export function postNewUser(newUserData) {
  return axios.post(`${URL}/register`, newUserData);
}
