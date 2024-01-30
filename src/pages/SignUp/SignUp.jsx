import { SignUpContainer, Image, Title, NameColumn, AppContainer } from "./StyledSignUp"

import './SignUp_styles.css'

import myImage from '../../assets/img/img-signUp/img_cadastro.png'
import FloatInput from "../../components/FloatInput/FloatInput"
import PrimaryButton from "../../components/PrimaryButton"

import toast, { Toaster } from 'react-hot-toast'
import { useForm } from "react-hook-form"

import { api } from "../../api/apiRest"


export default function SignUp(){

    const { register, handleSubmit, formState: { errors } } = useForm()


    const notifyAlert = (status) => {

        if (status == 200) {
            toast.success('Cadastro feito com sucesso!', {

                    duration: Infinity,
        
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
            return
        }

        toast.error('Erro ao realizar o cadastro. Tente novamente', {

            iconTheme: {
                primary: '#fff',
                secondary: '#DD0000',
            },
    
            style: {
                background: "#DD0000",
                color: "white",
                minWidth: "20rem",
            }

            }

        )


    } 

    const onSubmit = (data) => {
        
        api.post('usuario/', {
            nome: data?.nome,
            sobrenome: data?.sobrenome,
            email: data?.email,
            senha: data?.senha
        })
        .then((response) => {
            notifyAlert(response.status)
        })
        .catch((error) => {
            notifyAlert(error.status)
        }) 

    };


    return(
        <AppContainer>
            <Image src={myImage} />

            <SignUpContainer>

                <div className="div-positioner">

                    <form className="form" onSubmit={handleSubmit(onSubmit)} method="POST" >


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
                            <FloatInput label={"nome"} type={"text"} name={"firstName"} register={register} required={true} classes={errors.nome && "required"} />
                            <FloatInput label={"sobrenome"} type={"text"} name={"lastName"} register={register} required={true} classes={errors.sobrenome && "required"} />
                        </NameColumn>

                        <FloatInput label={"email"} type={"email"} name={"email"} classes={errors.email && "required"} register={register} required={true} />
                        <FloatInput label={"senha"} type={"password"} name={"password"} classes={errors.senha && "required"} register={register} required={true} />

                        { errors.senha && <span className="helperMessage">{errors.senha.message}</span> }    
                        
                        <PrimaryButton text={"CADASTRAR"} />

                    </form>

                </div>


            </SignUpContainer>

        </AppContainer>
    )
}