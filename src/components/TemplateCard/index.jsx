import { MdCollections } from "react-icons/md";
import {
  ProjectImageSC,
  ContainerCardSC,
  EditBtnSpaceSC,
  ProjectOwnerInfosSC,
} from "./style";
import profilePictureDefault from "../../assets/images/profile-picture-default.svg";
import ModalEdit from "../ModalEdit";
import { useState } from "react";

const TemplateCard = () => {
  // TODO: RECEBER PROPS
  // FIXME: APAGAR MOCK PROPS

  const props = {
    class: "with-project",
    activated: true,
    projectImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    userPicture: profilePictureDefault,
    userName: "Lorem Ipsum",
    projectDate: "12/23",
  };

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <ContainerCardSC
      className={props?.class}
      $activated={props?.activated}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <EditBtnSpaceSC>{isButtonVisible && <ModalEdit />}</EditBtnSpaceSC>
      <ProjectImageSC
        className="project-image"
        src={props.projectImage}
        alt="imagem do projeto"
      />
      <MdCollections className="icon-pictures " size={"3rem"} color="#323232" />
      <h1 className="title">Adicione seu primeiro projeto</h1>
      <p className="paragraph">
        Compartilhe seu talento com milhares de pessoas
      </p>
      <ProjectOwnerInfosSC>
        <img
          className="user-picture"
          src={props.userPicture || profilePictureDefault}
          alt="imagem do proprietário do projeto"
        />
        <div className="informative-text">
          <h1 className="user-name">{props.userName}</h1>
          <span className="dot">•</span>
          <p className="project-date">{props.projectDate}</p>
        </div>
      </ProjectOwnerInfosSC>
    </ContainerCardSC>
  );
};

export default TemplateCard;
