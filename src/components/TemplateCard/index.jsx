import { MdCollections } from "react-icons/md";
import { ProjectImageSC, ContainerCardSC } from "./style";

const TemplateCard = () => {
  // TODO: RECEBER PROPS
  // FIXME: APAGAR MOCK PROPS
  
  const props = { class: "add-project", activated: true };

  return (
    <ContainerCardSC className={props?.class} $activated={props?.activated}>
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
