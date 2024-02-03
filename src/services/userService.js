import { api } from "../api/apiRest";

export const getJustOneUserWithYourProjectsByUserId = async (userId) => {
  try {
    const response = await api.get("/usuario/getUsuarioProjetoByIdUsuario", {
      params: {
        idUsuario: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao obter usuário:",
      error.response.status,
      error.response.statusText
    );
  }
};

export const getUserFullName = async (userId) => {
  const response = await getJustOneUserWithYourProjectsByUserId(userId);
  const fullName = `${response.nome} ${response.sobrenome}`;
  return fullName;
};
