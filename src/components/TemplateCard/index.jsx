import { MdCollections } from "react-icons/md";
import { ProjectImageSC, ContainerCardSC, EditBtnSpaceSC } from "./style";
import ModalEdit from "../ModalEdit";
import { useState } from "react";

const TemplateCard = () => {
  // TODO: RECEBER PROPS
  // FIXME: APAGAR MOCK PROPS

  const props = {
    class: "with-project",
    activated: true,
    projectImage:
      "https://www.datocms-assets.com/205/1652096903-landing-page-template.png?auto=format&crop=top&fit=crop&h=350&w=450",
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
    </ContainerCardSC>
  );
};

export default TemplateCard;
