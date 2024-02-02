import { api } from "../api/apiRest";

export const getJustOneUserWithYourProjectsByUserId = async (data) => {
  console.log(data);
};

export const getAllProjects = async () => {
  try {
    const response = await api.get(`/projeto`);
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao obter projetos:",
      error.response.status,
      error.response.statusText
    );
  }
};
