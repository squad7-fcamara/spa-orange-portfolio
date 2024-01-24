import { SignUpContainer, Image, Title, NameColumn, SignUpButton, AppContainer } from "./StyledSignUp"

import './SignUp_styles.css'

import myImage from '../../assets/img/img-signUp/img_cadastro.png'


export default function SignUp(){
    return(
        <AppContainer>
            <Image src={myImage} />

            <SignUpContainer>

                <form>

                    <Title>Cadastre-se</Title>
                    <NameColumn>
                        <div className='label'>
                            <input type="text" placeholder=" " />
                            <label htmlFor="name">Nome</label>
                        </div>

                        <div className='label'>
                            <input type="text" id="lastName" placeholder=" " />
                            <label htmlFor="lastName">Sobrenome</label>
                        </div>
                    </NameColumn>

                    <div className='label'>
                        <input className="col-maxWidth"  type="email"  placeholder=" " />
                        <label>Email address</label>
                    </div>
    
                    <div className='label'>
                        <input className="col-maxWidth"  type="password"  placeholder=" " />
                        <label>Password</label>
                    </div>
    
                    <SignUpButton>CADASTRAR</SignUpButton>

                </form>

            </SignUpContainer>

        </AppContainer>
    )
}