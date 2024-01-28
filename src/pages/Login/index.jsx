import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import { AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";
import FloatInput from "../../components/FloatInput/FloatInput";

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

        <FloatInput label={"Email address"} type={"email"} id_value={"email"} handleInputText={handleInputText} classes={"col-maxWidth"}/>
        <FloatInput label={"Password"} type={"password"} id_value={"password"} handleInputText={handleInputPassWord} classes={"col-maxWidth"}/>

        <PrimaryButton onClick={clickTeste} text={"ENTRAR"} ></PrimaryButton>

      <Cadastro>
        <LinkCadastro href="./sign-up">Cadastre-se</LinkCadastro>
      </Cadastro>
    </ContentContainer>


    </AppContainer>
  )
}

export default Login