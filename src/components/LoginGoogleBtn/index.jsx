// import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { api } from '../../api/apiRest'

import {Content} from "./styledLogingGoogleBtn"

const LoginGoogleBtn = () => {

  const loginWithGoogle = async (data) => {

    try {
      const response = await api.get(`usuario/validarLogin?email=${data.email}&senha=${data.sub}`);
      
      if (response.data === -1) {

        console.log('Usuário não existe, criando um novo usuário:', response.data);
        signUpWithGoogle(data)    

      } 
      else {
        console.log('Login bem-sucedido:', response.data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  const signUpWithGoogle =  (data) => {

      api.post('usuario/', {
          nome: data?.given_name,
          sobrenome: data?.family_name,
          email: data?.email,
          senha: data?.sub,
      })
      .then((response) => {

        console.log(response, "nova tentativa de login")
        loginWithGoogle(data)
        
      })
      .catch((error) => {
        console.log(error)

        if (error.response.status == 409) {
          loginWithGoogle(data)
        }

      })
    
  }

  return (
    <Content>
          <GoogleLogin 
              onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                   
                  loginWithGoogle(credentialResponseDecoded)

              }}
              onError={() => {
                  console.log('Login Failed');
              }}
            />
    </Content>
  )
}

export default LoginGoogleBtn