import axios from "axios";

export const api = axios.create({
  // baseURL: "https://apisquad7.azurewebsites.net/api",
  baseURL: "http://localhost:5167/api"
});
