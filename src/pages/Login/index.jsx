import LoginGoogleBtn from "../../components/LoginGoogleBtn"
// import FloatLabel from "../../components/Label";

import {AppContainer, ImageContainer, HeroImage, ContentContainer, Title , Cadastro,LinkCadastro} from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";
import FloatInput from "../../components/FloatInput/FloatInput";

const Login = () => {
  return (
  <AppContainer>
    <ImageContainer>
    <HeroImage />
    </ImageContainer>
    
    <ContentContainer>
      <Title>Entre no Orange Portfólio</Title>
      <LoginGoogleBtn />
      {/* <FloatLabel /> */}

      < FloatInput label={"Email address"} type={"email"} classes={"col-maxWidth"} />
      < FloatInput label={"Password"} type={"password"} classes={"col-maxWidth"} />
      
      <PrimaryButton onClick={() => console.log("teste")} text={"ENTRAR"} />

      <Cadastro>
        <LinkCadastro>Cadastre-se</LinkCadastro>
      </Cadastro>
    </ContentContainer>


  </AppContainer>
  )
}

export default Login