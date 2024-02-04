import {useState} from 'react'


import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImageDate, TagProjects, ImagemProject, DescriptionProject} from "./StyledModalVisualAllProjects"
import { MdClose } from 'react-icons/md';
const ModalVisualSingleProjects = ({setModalVisualSingleProjects}) => {

    const [dataProject, setDataProject] = useState({
        idProjeto:"1",
        idUsuario:"5",
        titulo:"Teste Valor",
        imagem:``,
        tag:"WEB;HTML ",
        link:"https://www.google.com",
        descricao:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda explicabo exercitationem unde voluptatem suscipit at quaerat non! Quasi laboriosam reiciendis voluptates nisi veniam amet eligendi perspiciatis provident. Aperiam tenetur architecto labore aspernatur odio, sed, laboriosam doloribus deserunt eligendi similique, corrupti rerum et atque est exercitationem dolores praesentium quidem aut?",
        dataCriacao:"02/24",
        nomeCompleto:"Raphael Ferro",
        arquivoImagem:``,

    })
    const tagsArray = dataProject.tag.split(";");

  return (
    <BackgroundFilter >
        
        <CardVisualProject>
                    <MdClose onClick={() => setModalVisualSingleProjects(false)} className="close-button"/>
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

export default ModalVisualSingleProjects;