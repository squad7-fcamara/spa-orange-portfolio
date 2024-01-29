import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'


import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import PrimaryButton from "../../components/PrimaryButton";
import FloatInput from "../../components/FloatInput/FloatInput";

import { AppContainer, ImageContainer, HeroImage, ContentContainer, Title, SubtitleLoginLabel, Cadastro, LinkCadastro } from "./StyledLogin"

const Login = () => {
  // useState

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Listening: Email / Senha
  const handleInputText = (e) => {
    setEmail(e.target.value)
  }
  const handleInputPassWord = (e) => {
    setPassword(e.target.value)
  };

  //Click validation
  const handleClickLogin = async () => {
    try {
      const response = await axios.get(`https://apisquad7.azurewebsites.net/api/usuario/validarLogin?email=${email}&senha=${password}`);
      if (response.data === -1) {
        console.log('Login falhou:', response.data);
        toast.error('Email ou senha incorreta. Tente novamente.', {
          iconTheme: {
            primary: '#fff',
            secondary: '#DD0000',
          },
          style: {
            background: "#DD0000",
            color: "white",
            minWidth: "20rem",
          }
        });
      } else {
        console.log('Login bem-sucedido:', response.data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <AppContainer>

      <ImageContainer>
        <HeroImage />
      </ImageContainer>

      <ContentContainer>

        
          <Toaster
            containerClassName="alert"
            containerStyle={{
              position: 'absolute',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            }}
          />
        

        <Title>Entre no Orange Portfólio</Title>
        {/* Comentei o  botão do google para resolver depois */}
        <LoginGoogleBtn />
        <SubtitleLoginLabel>Faça Login com email</SubtitleLoginLabel>
        <FloatInput label={"Email address"} type={"email"} id_value={"email"} handleInputText={handleInputText} classes={"col-maxWidth"} />
        <FloatInput label={"Password"} type={"password"} id_value={"password"} handleInputText={handleInputPassWord} classes={"col-maxWidth"} />

        <PrimaryButton onClick={handleClickLogin} text={"ENTRAR"} ></PrimaryButton>

        <Cadastro>
          <NavLink to={"/sign-up"}>
            <LinkCadastro href="">Cadastre-se</LinkCadastro>
          </NavLink>
        </Cadastro>
      </ContentContainer>


    </AppContainer>
  )
}

export default Login