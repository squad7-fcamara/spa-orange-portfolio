import { api } from "../../api/apiRest";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import LoginGoogleBtn from "../../components/LoginGoogleBtn";
import {
  FormLogin,
  AppContainer,
  ImageContainer,
  HeroImage,
  ContentContainer,
  Title,
  Cadastro,
} from "./StyledLogin";
import PrimaryButton from "../../components/PrimaryButton";

import FloatInput from "../../components/FloatInput/FloatInput";

import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.get(
        `usuario/validarLogin?email=${data.email}&senha=${data.senha}`
      );
      if (response.data.idUsuario === -1) {
        toast.error("Email ou senha incorreta. Tente novamente.", {
          iconTheme: {
            primary: "#fff",
            secondary: "#DD0000",
          },
          style: {
            background: "#DD0000",
            color: "white",
            minWidth: "20rem",
          },
        });
      } else {
        sessionStorage.setItem("userId", response.data.idUsuario);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setLoading(false);
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
            position: "absolute",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        />

        <Title>Entre no Orange Portfólio</Title>

        <FormLogin onSubmit={handleSubmit(onSubmit)} method="get">
          <LoginGoogleBtn />

          <FloatInput
            label={"email"}
            type={"email"}
            name={"email"}
            id_value={"email"}
            register={register}
            required={true}
            classes={errors.email && "required"}
          />
          <FloatInput
            label={"senha"}
            type={"password"}
            name={"password"}
            id_value={"password"}
            register={register}
            required={true}
            classes={errors.senha && "required"}
          />

          <PrimaryButton type="submit" text={"ENTRAR"} loading={loading} />
        </FormLogin>
        <Cadastro>
          <NavLink to={"/sign-up"}>Cadastre-se</NavLink>
        </Cadastro>
      </ContentContainer>
    </AppContainer>
  );
};

export default Login;
