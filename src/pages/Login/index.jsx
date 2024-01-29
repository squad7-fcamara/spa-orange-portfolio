import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import { FormLogin, AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";

import FloatInput from "../../components/FloatInput/FloatInput";

import { useForm } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit =  async (data) => {
    console.log(data)

    try {
      const response = await axios.get(`https://apisquad7.azurewebsites.net/api/usuario/validarLogin?email=${data.email}&senha=${data.senha}`);
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
  }


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

        <FormLogin onSubmit={handleSubmit(onSubmit)} method="get">

          <LoginGoogleBtn />

          <FloatInput label={"email"} type={"email"} name={"email"} id_value={"email"} register={register} required={true} classes={errors.email && "required"} />
          <FloatInput label={"senha"} type={"password"} name={"password"} id_value={"password"} register={register} required={true} classes={errors.senha && "required"} />

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