import { useState } from "react";
import { api } from "../../api/apiRest";


export function FooterCard(){

    
    const [userInfos, setUserInfos] = useState({});

    const userInformation = async (idUsuario) => {
        try {
        const response = await api.get(`usuario/getByIdUsuario?idUsuario=${idUsuario}`);
        // const userData = await response.json();
        return response;
        } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
        return {};
        }
    };

    return(
        <></>
    )
}