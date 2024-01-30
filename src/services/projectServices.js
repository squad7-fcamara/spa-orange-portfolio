import axios from "axios";

const baseURL = "https://apisquad7.azurewebsites.net/api/projeto";

export function getProjects() {
  const response = axios.get(`${baseURL}`);
  return response;
}
