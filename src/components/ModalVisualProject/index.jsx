import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImageDate, TagProjects, ImagemProject, DescriptionProject} from "./StyledModalVisualProject";
import { MdClose } from 'react-icons/md';


const ModalVisualProject = ({goBack, preview, fullName, image, currentDate}) => {

    console.log(image);


    const tagsArray = preview && preview.tag ? preview.tag.split(";") : [];
    
  return (
    <BackgroundFilter>
        
        
        <CardVisualProject>
        <MdClose  onClick={goBack} className="close-button"/>
            <ContainerProject>

                <PerfilImageDate>
                    <img className="perfil-image-project"
                        src="/src/assets/images/profile-picture-default.svg"
                        alt="imagem de perfil"
                    />
                    <span className="span-perfil-name-data">
                        <h5 className="perfil-name">{fullName}</h5>
                        <h5 className="data-project">{currentDate}</h5>
                    </span>
                </PerfilImageDate>

                <Title>{preview.titulo}</Title>
            
                <TagProjects className="tag"> 
                    { 
                        tagsArray.map((tag, index) => <p key={index}>{tag}</p>)                    
                    }
                    
                    
                </TagProjects>
                
                <ImagemProject imageproject={image} />

                <DescriptionProject>
                    <p className="description-text">
                        {preview.descricao}
                    </p>
                </DescriptionProject>
                
            </ContainerProject>

        </CardVisualProject>
    </BackgroundFilter>
  )
}

export default ModalVisualProject