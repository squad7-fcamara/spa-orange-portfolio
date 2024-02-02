// import React from 'react'

import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImageDate, TagProjects, ImagemProject, DescriptionProject} from "./StyledModalVisualProject"

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

                <DescriptionProject>
                    <p className="description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quas quibusdam voluptatum eum. Suscipit incidunt explicabo odio magni est provident nulla praesentium quam, necessitatibus nobis mollitia totam unde laudantium rerum.
                    </p>
                </DescriptionProject>
                
            </ContainerProject>
        
        </CardVisualProject>
    </BackgroundFilter>
  )
}

export default ModalVisualProject