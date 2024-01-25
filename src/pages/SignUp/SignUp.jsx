import { SignUpContainer, Image, Title, NameColumn, AppContainer } from "./StyledSignUp"

import './SignUp_styles.css'

import myImage from '../../assets/img/img-signUp/img_cadastro.png'
import FloatInput from "../../components/FloatInput/FloatInput"
import PrimaryButton from "../../components/PrimaryButton"

import toast, { Toaster } from 'react-hot-toast'


export default function SignUp(){

    const notifyAlert = () => 
        toast.success('Cadastro feito com sucesso!', {

            iconTheme: {
                primary: '#fff',
                secondary: '#2E7D32',
              },

            style: {
                background: "#2E7D32",
                color: "white",
                minWidth: "20rem",
            }

        }
    )

    const handleSubmit = (event) => {
        notifyAlert()
        event.preventDefault();
    }

    return(
        <AppContainer>
            <Image src={myImage} />

            <SignUpContainer>

                <div className="div-positioner">

                    <form className="form" onSubmit={handleSubmit}>


                        <Toaster 
                        containerClassName="alert"
                            containerStyle={{
                                position: 'absolute',
                                marginTop: '2.5rem',
                                marginBottom: '1rem',
                                }}
                        />

                        <Title>Cadastre-se</Title>

                        <NameColumn>
                            <FloatInput label={"Nome"} type={"text"}/>
                            <FloatInput label={"Sobrenome"} type={"text"}/>
                        </NameColumn>

                        <FloatInput label={"Email address"} type={"email"} classes={"col-maxWidth"}/>
                        <FloatInput label={"Password"} type={"password"} classes={"col-maxWidth"}/>
        
                        <PrimaryButton text={"CADASTRAR"} />


                    </form>

                </div>


            </SignUpContainer>

        </AppContainer>
    )
}