import { api } from "../api/apiRest";
import { getJustOneUserWithYourProjectsByUserId } from "./userService";

export const getAllProjects = async (excludeId) => {
  try {
    const response = await api.get("/projeto/getComunidade", {
      params: {
        idUsuario: excludeId,
      },
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

export const getProjectImage = async (projectId) => {
  try {
    const response = await api.post(`/projeto/${projectId}/download`);
    console.log(response.data); // FIXME: APAGAR LINHA
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao obter imagem do projeto:",
      error.response.status,
      error.response.statusText
    );
  }
};
