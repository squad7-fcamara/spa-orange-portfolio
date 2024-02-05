import {useState} from 'react'

import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImageDate, TagProjects, ImagemProject, DescriptionProject} from "./StyledModalVisualProject"
import { MdClose } from 'react-icons/md';
const ModalVisualProject = ({setModalShowProject, dataProject}) => {

    
    const tagsArray = dataProject.tag.split(";");

return (
    <BackgroundFilter>
        
        <CardVisualProject>
                    <MdClose onClick={() => setModalShowProject(false)} className="close-button"/>
            <ContainerProject>
                
                

            <PerfilImageDate>
                    <img className="perfil-image-project"
                        src={dataProject.imagem}
                        alt="imagem de perfil"
                    />
                    <span className="span-perfil-name-data">
                        <h5 className="perfil-name">{dataProject.nomeCompleto}</h5>
                        <h5 className="data-project">{dataProject.dataCriacao}</h5>
                    </span>
                </PerfilImageDate>

                <Title>{dataProject.titulo}</Title>
            
                <TagProjects className="tag"> 
                    { 
                     tagsArray.map((tag, index) => <p key={index}>{tag}</p>)                    
                    }
                    
                    
                </TagProjects>
                
                <ImagemProject />

                <DescriptionProject>
                    <p className="description-text">
                        {dataProject.descricao  }
                    </p>
                </DescriptionProject>
                
            </ContainerProject>
        
        </CardVisualProject>
    </BackgroundFilter>
  )
}

export default ModalVisualProject