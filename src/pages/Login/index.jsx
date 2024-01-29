import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


// import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import PrimaryButton from "../../components/PrimaryButton";
import FloatInput from "../../components/FloatInput/FloatInput";

import { AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"

const Login = () => {
  // useState

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // teste
  const handleInputText = (e) => {
    setEmail(e.target.value)
  }
  const handleInputPassWord = (e) => {
    setPassword(e.target.value)
  };

  const handleClickLogin = () => {
    axios.get(`https://apisquad7.azurewebsites.net/api/usuario/validarLogin?email=${email}&senha=${password}`)
      .then(response => {
        
        console.log('Deu certo:', response.data);
      })
      .catch(error => {
        console.error('Deu errado:', error);
      });
  };

  return (
    <AppContainer>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>

      <ContentContainer>
        <Title>Entre no Orange Portfólio</Title>
        {/* Comentei o  botão do google para resolver depois */}
        {/* <LoginGoogleBtn /> */}

        <FloatInput label={"Email address"} type={"email"} id_value={"email"} handleInputText={handleInputText} classes={"col-maxWidth"}/>
        <FloatInput label={"Password"} type={"password"} id_value={"password"} handleInputText={handleInputPassWord} classes={"col-maxWidth"}/>

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