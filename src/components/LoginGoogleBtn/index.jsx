// import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { api } from "../../api/apiRest";

import { Content } from "./styledLogingGoogleBtn";
import { useNavigate } from "react-router-dom";

const LoginGoogleBtn = () => {
  const navigate = useNavigate();
  const loginWithGoogle = async (data) => {
    try {
      const response = await api.get(
        `usuario/validarLogin?email=${data.email}&senha=${data.sub}`
      );

      if (response.data.idUsuario === -1) {
        signUpWithGoogle(data);
      } else {
        sessionStorage.setItem("userId", response.data.idUsuario);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const signUpWithGoogle = (data) => {
    api
      .post("usuario/", {
        nome: data?.given_name,
        sobrenome: data?.family_name,
        email: data?.email,
        senha: data?.sub,
      })
      .then((response) => {
        loginWithGoogle(data);
      })
      .catch((error) => {
        if (error.response.status == 409) {
          loginWithGoogle(data);
        }
      });
  };

  return (
    <Content>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const credentialResponseDecoded = jwtDecode(
            credentialResponse.credential
          );

          loginWithGoogle(credentialResponseDecoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </Content>
  );
};

export default LoginGoogleBtn;
