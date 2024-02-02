// import React from 'react'

import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImageDate, TagProjects, ImagemProject} from "./StyledModalVisualProject"

const ModalVisualProject = () => {
  return (
    <BackgroundFilter>
        
        <CardVisualProject>
        
            <ContainerProject>

                <PerfilImageDate>
                    <img className="perfil-image-project"
                        src="/src/assets/images/profile-picture-default.svg"
                        alt="imagem de perfil"
                    />
                    <span className="span-perfil-name-data">
                        <h5 className="perfil-name">Raphael da Silveira</h5>
                        <h5 className="data-project">01/12</h5>
                    </span>
                </PerfilImageDate>

                <Title>Titulo do projeto </Title>
            
                <TagProjects className="tag"> 
                    <p>HTML</p>
                    <p>JAVASCRIPT</p>
                    <p>C++</p>
                    <p>Node</p>
                    <p>WEB</p>
                    
                    
                </TagProjects>
                
                <ImagemProject />
                
            </ContainerProject>
        
        </CardVisualProject>
    </BackgroundFilter>
  )
}

export default ModalVisualProject