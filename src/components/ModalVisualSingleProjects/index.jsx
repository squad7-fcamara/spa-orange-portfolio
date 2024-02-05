import {BackgroundFilter,CardVisualProject, ContainerProject, Title, PerfilImageDate, TagProjects, ImagemProject, DescriptionProject} from "./StyledModalVisualAllProjects"
import { MdClose } from 'react-icons/md';
import picture from '../../assets/images/profile-picture-default.svg'
import noImageDefault from "../../assets/images/no-image.png";
import errorTypeImage from "../../assets/images/erro-type-image.png";
import { base64ToUrl } from "../../utils/createImageUrl.js";
import { useEffect, useState } from "react";


const ModalVisualSingleProjects = ({onCloseModal, projectSelected}) => {

    const [imageSrc, setImageSrc] = useState(undefined)

    const projectImage = projectSelected.arquivoImagem.fileContents
    const imageType = projectSelected.arquivoImagem.contentType
    
    const tagsArray = projectSelected.tag.split(";");

    useEffect(() => {
        const url =
          imageType === "image/jpg" || imageType === "image/png"
            ? base64ToUrl(imageType, projectImage)
            : imageType
            ? errorTypeImage
            : noImageDefault;
    
        setImageSrc(url);
    }, [projectImage, imageType]);


  return (
    <BackgroundFilter >
        
        <CardVisualProject>
            <ContainerProject>
                <div className="closeDiv">
                    <MdClose onClick={onCloseModal} className="close-button"/>
                </div>

                <PerfilImageDate>
                    <img className="perfil-image-project"
                        src={picture}
                        alt="imagem de perfil"
                    />
                    <span className="span-perfil-name-data">
                        <h5 className="perfil-name">{projectSelected.nomeCompleto}</h5>
                        <h5 className="data-project">{projectSelected.dataCriacao}</h5>
                    </span>
                </PerfilImageDate>

                <Title>{projectSelected.titulo}</Title>
            
                <TagProjects className="tag"> 
                    { 
                     tagsArray.map((tag, index) => <p key={index}>{tag}</p>)                    
                    }
                    
                    
                </TagProjects>
                
                <ImagemProject imageproject={imageSrc} />

                <DescriptionProject>
                    <p className="description-text">
                        {projectSelected.descricao  }
                    </p>
                </DescriptionProject>
                
            </ContainerProject>
        
        </CardVisualProject>
    </BackgroundFilter>
  )
}

export default ModalVisualSingleProjects;