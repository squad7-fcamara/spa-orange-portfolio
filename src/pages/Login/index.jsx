import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import FloatLabel from "../../components/FloatLabel";

import { AppContainer, ImageContainer, HeroImage, ContentContainer, Title, Cadastro, LinkCadastro } from "./StyledLogin"
import PrimaryButton from "../../components/PrimaryButton";

const Login = () => {
  return (
    <AppContainer>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>

      <ContentContainer>
        <Title>Entre no Orange Portfólio</Title>
        <LoginGoogleBtn />
        <FloatLabel />

        <PrimaryButton onClick={() => console.log("teste")}>Entrar</PrimaryButton>

        <Cadastro>
          <LinkCadastro>Cadastre-se
          </LinkCadastro>
        </Cadastro>
      </ContentContainer>


    </AppContainer>
  )
}

export default Login