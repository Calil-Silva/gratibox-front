import axios from "axios";

const URL = "https://gratibox-webapp.herokuapp.com";

function setConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export function postNewUser(newUserData) {
  return axios.post(`${URL}/register`, newUserData);
}

export function postLogin(credentials) {
  return axios.post(`${URL}/login`, credentials);
}

export function getPlans(token) {
  return axios.get(`${URL}/user`, setConfig(token));
}
