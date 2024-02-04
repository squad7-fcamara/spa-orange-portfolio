import { api } from "../api/apiRest";
import { getJustOneUserWithYourProjectsByUserId } from "./userService";

export const getAllProjects = async (excludeId) => {
  try {
    const response = await api.get("/projeto/getComunidade", {
      idUsuario: excludeId
    });
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao obter projetos:",
      error.response.status,
      error.response.statusText
    );
  }
};

export const getAuthUserProjects = async (userId) => {
  const response = await getJustOneUserWithYourProjectsByUserId(userId);
  return response.lstProjeto;
};
