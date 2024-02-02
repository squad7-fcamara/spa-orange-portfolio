// import React from 'react'

import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImage, TagProjects} from "./StyledModalVisualProject"

const ModalVisualProject = () => {
  return (
    <BackgroundFilter>
        
        <CardVisualProject>
        
            <ContainerProject>

                <PerfilImage>
                    <img className="perfil-image-project"
                    src="/src/assets/images/profile-picture-default.svg"
                    alt="imagem de perfil"
                    />
                    <h5 className="data-project">
                    01/12
                    </h5>
                </PerfilImage>

                <Title>Titulo do projeto</Title>
            
                <TagProjects className="tag">UX</TagProjects>
            </ContainerProject>
        
        </CardVisualProject>
    </BackgroundFilter>
  )
}

export default ModalVisualProject