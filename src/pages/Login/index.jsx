import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import { FormLogin, AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";
// import { useState } from "react";
import FloatInput from "../../components/FloatInput/FloatInput";

import { useForm } from "react-hook-form"

const Login = () => {
  // useState
  // const [teste, setTeste] = useState("")

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // teste
  // const handleInputText = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handleInputPassWord = (e) => {
  //   setPassword(e.target.value)
  // };
  // const clickTeste = () =>{
  //   setTeste(console.log("email:" , email, "password: ", password))

  //   return teste
  // }

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <AppContainer>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>

      <ContentContainer>
        <Title>Entre no Orange Portfólio</Title>

        <FormLogin onSubmit={handleSubmit(onSubmit)} method="get">

          <LoginGoogleBtn />

          <FloatInput label={"email"} type={"email"} name={"email"} id_value={"email"} register={register} />
          <FloatInput label={"senha"} type={"password"} name={"password"} id_value={"password"} register={register} />

          <PrimaryButton text={"ENTRAR"} ></PrimaryButton>

        </FormLogin>


      <Cadastro>
        <LinkCadastro href="./sign-up">Cadastre-se</LinkCadastro>
      </Cadastro>
    </ContentContainer>


    </AppContainer>
  )
}

export default Login