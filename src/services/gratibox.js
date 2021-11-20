import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

// "https://gratibox-webapp.herokuapp.com";

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

export function getNewPlan(token) {
  return axios.get(`${URL}/newplan`, setConfig(token));
}

export function postUserPlan(plan, token) {
  return axios.post(`${URL}/newplan`, plan, setConfig(token));
}
