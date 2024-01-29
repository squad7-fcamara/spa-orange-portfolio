import { SignUpContainer, Image, Title, NameColumn, AppContainer } from "./StyledSignUp"

import './SignUp_styles.css'

import myImage from '../../assets/img/img-signUp/img_cadastro.png'
import FloatInput from "../../components/FloatInput/FloatInput"
import PrimaryButton from "../../components/PrimaryButton"

import toast, { Toaster } from 'react-hot-toast'
import { useForm } from "react-hook-form"


export default function SignUp(){

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

    // console.log(watch("example"))

    // const notifyAlert = () => 
    //     toast.success('Cadastro feito com sucesso!', {

    //         iconTheme: {
    //             primary: '#fff',
    //             secondary: '#2E7D32',
    //           },

    //         style: {
    //             background: "#2E7D32",
    //             color: "white",
    //             minWidth: "20rem",
    //         }

    //     }
    // )

    // const handleSubmit = (event) => {
    //     notifyAlert()
    //     event.preventDefault();
    // }

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
                            <FloatInput label={"nome"} type={"text"} name={"firstName"} register={register} required />
                            <FloatInput label={"sobrenome"} type={"text"} name={"lastName"} register={register} required />
                        </NameColumn>

                        <FloatInput label={"email"} type={"email"} name={"email"} classes={"col-maxWidth"} register={register} required />
                        <FloatInput label={"senha"} type={"password"} name={"password"} classes={"col-maxWidth"} register={register} required />
        
                        <PrimaryButton text={"CADASTRAR"} />

                        { errors.email && <span>This field is required</span> }

                    </form>

                </div>


            </SignUpContainer>

        </AppContainer>
    )
}