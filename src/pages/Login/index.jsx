// import { api } from "../../api/apiRest";

import { NavLink } from "react-router-dom";
import { Toaster } from 'react-hot-toast'


import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import { FormLogin, AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";

import FloatInput from "../../components/FloatInput/FloatInput";
// import Loader from "../../components/Loader/Loader";

import { useNavigate } from 'react-router-dom'
// import { useState, useEffect, useContext } from 'react'
import { useContext } from 'react'
import { useForm } from "react-hook-form"

// import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/auth/AuthContext";

const Login = () => {

  const auth = useContext(AuthContext)


  // const [isLogedIn, setIsLogedIn] = useState(false)

  // const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const onSubmit =  async (data) => {

    const isLogged = await auth.validateLogin(data.email, data.senha)

    if(isLogged) {
      navigate('/my-projects')
    } else {
      alert("nao rolou")
    }

    // try {
    //   const response = await api.get(`usuario/validarLogin?email=${data.email}&senha=${data.senha}`);
    //   if (response.data === -1) {
    //     console.log('Login falhou:', response.data);
    //     toast.error('Email ou senha incorreta. Tente novamente.', {
    //       iconTheme: {
    //         primary: '#fff',
    //         secondary: '#DD0000',
    //       },
    //       style: {
    //         background: "#DD0000",
    //         color: "white",
    //         minWidth: "20rem",
    //       }
    //     });
    //   } else {
    //     console.log('Login bem-sucedido:', response);

    //     // const token = response.data
    //     // Cookies.set('auth_token', token)

    //     // setIsLogedIn(true)

    //   }
    // } catch (error) {
    //   console.error('Erro na requisição:', error);
    // }
  }

  // if (isLoading) {
  //   return <Loader />
  // }

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
          <NavLink to={"/sign-up"}>
            <LinkCadastro href="">Cadastre-se</LinkCadastro>
          </NavLink>
        </Cadastro>
      </ContentContainer>


    </AppContainer>
  )
}

export default Login