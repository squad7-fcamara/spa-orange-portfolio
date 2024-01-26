import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import FloatLabel from "../../components/FloatLabel";

import { AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";

const Login = () => {
  // useState
  const [teste, setTeste] = useState("")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // teste
  const handleInputText = (e) => {
    setEmail(e.target.value)
  }
  const handleInputPassWord = (e) => {
    setPassword(e.target.value)
  };
  const clickTeste = () =>{
    setTeste(console.log("email:" , email, "password: ", password))

    return teste
  }


  return (
    <AppContainer>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>

      <ContentContainer>
        <Title>Entre no Orange Portfólio</Title>
        <LoginGoogleBtn />
        <FloatLabel handleInputText={handleInputText} handleInputPassWord={handleInputPassWord}/>

        <PrimaryButton onClick={clickTeste}>Entrar</PrimaryButton>

      <Cadastro>
        <LinkCadastro>Cadastre-se</LinkCadastro>
      </Cadastro>
    </ContentContainer>


    </AppContainer>
  )
}

export default Login