// import React from 'react'
import PrimaryButton from '../../PrimaryButton'
import {BackgroundFilter, ModalContentConfirmCard, Container, Title, IconSuccessPlace, ButtonPlace} from "./StyledConfirmationButton"

import SuccessIcon from "../../../assets/images/success-icon.png"

const ConfirmationButton = ({text = "Projeto adicionado com Sucesso!"}, onClick) => {

  // possiveis entradas
  //  text="Projeto adicionado com Sucesso!"
  //  text="Edição concluída com Sucesso!"
  //  text="Projeto deletado com sucesso!"
  return (
    <BackgroundFilter>
        <ModalContentConfirmCard>
            <Container>
              
              <Title>{text}</Title>
              
              <IconSuccessPlace>
                  <img className='success' src={SuccessIcon} alt="Success Icon" />
              </IconSuccessPlace>

              <ButtonPlace>

                <PrimaryButton onClick={onClick} text={"VOLTAR PARA PROJETOS"}/>

               
                
              </ButtonPlace>
            </Container>
        </ModalContentConfirmCard>
    </BackgroundFilter>
  )
}

export default ConfirmationButton