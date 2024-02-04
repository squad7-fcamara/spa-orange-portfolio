// import React from 'react'

import PrimaryButton from "../../PrimaryButton"
import SecondaryButton from "../../SecondaryButton"
import {BackgroundFilter, ModalContentDeleteCard, Container, Title, Subtitle, ButtonPlace} from "./StyledDeleteConfirmationButton"

const DeleteConfirmationButton = () => {
  return (
    <BackgroundFilter>
        <ModalContentDeleteCard>
            <Container>
              
              <Title>Deseja Excluir?</Title>
              <Subtitle>Se você prosseguir irá excluir o projeto do seu portfólio</Subtitle>

              <ButtonPlace>

                <PrimaryButton text={"EXCLUIR"}/>
                <SecondaryButton text={"CANCELAR"}/>
              </ButtonPlace>
            </Container>
        </ModalContentDeleteCard>
    </BackgroundFilter>
  )
}

export default DeleteConfirmationButton