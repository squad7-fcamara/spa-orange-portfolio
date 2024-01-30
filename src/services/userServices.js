import axios from "axios";

const baseURL = "https://apisquad7.azurewebsites.net/api/usuario";

export function getUsuarioProjetoByIdUsuario() {
  const response = axios.get(
    `${baseURL}/getUsuarioProjetoByIdUsuario?idUsuario=4` //TODO: pegar id do usuário logado
  );
  return response;
}
