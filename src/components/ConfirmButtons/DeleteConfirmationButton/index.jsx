// import React from 'react'

import { api } from "../../../api/apiRest"
import PrimaryButton from "../../PrimaryButton"
import SecondaryButton from "../../SecondaryButton"
import {BackgroundFilter, ModalContentDeleteCard, Container, Title, Subtitle, ButtonPlace} from "./StyledDeleteConfirmationButton"

const DeleteConfirmationButton = ({selectedProject, onClose}) => {

  const deleteProject = () => {
    api.delete(`/projeto/${selectedProject.idProjeto}`)
    onClose()

  }
  
  return (
    <BackgroundFilter>
        <ModalContentDeleteCard>
            <Container>
              
              <Title>Deseja Excluir?</Title>
              <Subtitle>Se você prosseguir irá excluir o projeto do seu portfólio</Subtitle>

              <ButtonPlace>

                <PrimaryButton onClick={ deleteProject } text={"EXCLUIR"}/>
                <SecondaryButton onClick={ onClose } text={"CANCELAR"}/>
              </ButtonPlace>
            </Container>
        </ModalContentDeleteCard>
    </BackgroundFilter>
  )
}

export default DeleteConfirmationButton