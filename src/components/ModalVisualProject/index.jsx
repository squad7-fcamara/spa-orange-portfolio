import {
  BackgroundFilter,
  CardVisualProject,
  ContainerProject,
  Title,
  PerfilImageDate,
  TagProjects,
  ImagemProject,
  DescriptionProject,
} from "./StyledModalVisualProject";
import { MdClose } from "react-icons/md";
import profilePictureDefault from "../../assets/images/profile-picture-default.svg";
import { formatDate } from "../../utils/formatDate";

const ModalVisualProject = ({
  goBack,
  preview,
  fullName,
  image,
  currentDate,
  tags,
  selectedProject,
  way

}) => {


  
  if (way === "edit") {
    
    currentDate = formatDate(selectedProject.dataCriacao);
  }
  let tagsArray;

if (tags.length > selectedProject.tag.length) {
  tagsArray = tags && tags ? tags.split(";") : [];
} else {
  tagsArray = selectedProject.tag && selectedProject.tag ? selectedProject.tag.split(";") : [];
}

console.log(tagsArray);

  return (
    <BackgroundFilter>
      <CardVisualProject>
        <MdClose onClick={goBack} className="close-button" />
        <ContainerProject>
          <PerfilImageDate>
            <img
              className="perfil-image-project"
              src={profilePictureDefault}
              alt="imagem de perfil"
            />
            <span className="span-perfil-name-data">
              <h5 className="perfil-name">{fullName}</h5>
              <h5 className="data-project">{currentDate}</h5>
            </span>
          </PerfilImageDate>

          <Title>{preview.titulo}</Title>

          <TagProjects className="tag" >
            {tagsArray.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </TagProjects>

          <ImagemProject imageproject={image} />

          <DescriptionProject>
            <p className="description-text">{preview.descricao}</p>
          </DescriptionProject>
        </ContainerProject>
      </CardVisualProject>
    </BackgroundFilter>
  );
};

export default ModalVisualProject;
