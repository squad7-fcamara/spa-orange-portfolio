import { SignUpContainer, Image, Title, NameColumn, AppContainer } from "./StyledSignUp"

import './SignUp_styles.css'

import myImage from '../../assets/img/img-signUp/img_cadastro.png'
import FloatInput from "../../components/FloatInput/FloatInput"
import PrimaryButton from "../../components/PrimaryButton"


export default function SignUp(){
    return(
        <AppContainer>
            <Image src={myImage} />

            <SignUpContainer>

                <form className="form">

                    <Title>Cadastre-se</Title>

                    <NameColumn>
                        <FloatInput label={"Nome"} type={"text"}/>
                        <FloatInput label={"Sobrenome"} type={"text"}/>
                    </NameColumn>

                    <FloatInput label={"Email address"} type={"email"} classes={"col-maxWidth"}/>
                    <FloatInput label={"Password"} type={"password"} classes={"col-maxWidth"}/>
    
                    <PrimaryButton onClick={() => console.log("cadastrar")} text={"CADASTRAR"} />

                </form>

            </SignUpContainer>

        </AppContainer>
    )
}