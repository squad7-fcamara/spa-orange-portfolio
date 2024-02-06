import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-squad7.azurewebsites.net/api",
  // baseURL: "http://localhost:5167/api",
});
