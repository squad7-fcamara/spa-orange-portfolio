import { SignUpContainer, Image, Title, NameColumn, SignUpButton, AppContainer } from "./StyledSignUp"

import './SignUp_styles.css'

import myImage from '../../assets/img/img-signUp/img_cadastro.png'
import FloatInput from "../../components/FloatInput/FloatInput"


export default function SignUp(){
    return(
        <AppContainer>
            <Image src={myImage} />

            <SignUpContainer>

                <form>

                    <Title>Cadastre-se</Title>

                    <NameColumn>
                        <FloatInput label={"Nome"} type={"text"}/>
                        <FloatInput label={"Sobrenome"} type={"text"}/>
                    </NameColumn>

                    <FloatInput label={"Email address"} type={"email"} classes={"col-maxWidth"}/>
                    <FloatInput label={"Password"} type={"password"} classes={"col-maxWidth"}/>
    
                    <SignUpButton>CADASTRAR</SignUpButton>

                </form>

            </SignUpContainer>

        </AppContainer>
    )
}