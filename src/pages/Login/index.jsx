import LoginGoogleBtn from "../../components/LoginGoogleBtn"
import FloatLabel from "../../components/Label";

import {AppContainer, ImageContainer, HeroImage, ContentContainer, Title , Cadastro,LinkCadastro} from "./StyledLogin"

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
      
      <Cadastro>
        <LinkCadastro>Cadastre-se
        </LinkCadastro>
      </Cadastro>
    </ContentContainer>


  </AppContainer>
  )
}

export default Login