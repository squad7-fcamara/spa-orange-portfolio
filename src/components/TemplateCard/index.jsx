import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdCollections } from "react-icons/md";
import { formatDate } from "../../utils/formatDate";
import { base64ToUrl } from "../../utils/createImageUrl.js";
import {
  ProjectImageSC,
  ContainerCardSC,
  EditBtnSpaceSC,
  ProjectOwnerInfosSC,
} from "./style";
import profilePictureDefault from "../../assets/images/profile-picture-default.svg";
import noImageDefault from "../../assets/images/no-image.png";
import errorTypeImage from "../../assets/images/erro-type-image.png";
import ModalEdit from "../ModalEdit";

const TemplateCard = (props) => {
  const { pathname } = useLocation();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [src, setSrc] = useState('');

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  useEffect(() => {
    const url =
      props.imageType === "image/jpg" || props.imageType === "image/png"
        ? base64ToUrl(props.imageType, props.projectImage)
        : props.imageType
        ? errorTypeImage
        : noImageDefault;

    setSrc(url);
  }, [props.imageType, props.projectImage]);

  return (
    <ContainerCardSC
      className={props.class}
      $activated={props.activated}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <EditBtnSpaceSC onClick={() => props.handleSelectProject(props.project)} className="header">
        {isButtonVisible && pathname === "/profile" && <ModalEdit  onOpen={ props.setModalEditIsClosed }  />}
      </EditBtnSpaceSC>
      <ProjectImageSC
        className="project-image"
        src={src || noImageDefault}
        alt="imagem do projeto"
      />
      <MdCollections className="icon-pictures " size={"3rem"} color="#323232" />
      <h1 className="title">Adicione seu primeiro projeto</h1>
      <p className="paragraph">
        Compartilhe seu talento com milhares de pessoas
      </p>
      <ProjectOwnerInfosSC className="footer">
        <img
          className="user-picture"
          src={props.userPicture || profilePictureDefault}
          alt="imagem do proprietário do projeto"
        />
        <div className="informative-text">
          <h1 className="user-name">{props.userName}</h1>
          <span className="dot">•</span>
          <p className="project-date">{formatDate(props.projectDate)}</p>
        </div>
      </ProjectOwnerInfosSC>
    </ContainerCardSC>
  );
};

export default TemplateCard;
