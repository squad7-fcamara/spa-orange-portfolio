import { MdCollections } from "react-icons/md";
import { CardWithoutProjectSC, BlankCardSC, ProjectCardSC } from "./style";

function ProjectCard() {
  return (
    <ProjectCardSC>
      <CardWithoutProjectSC>
        <MdCollections size={"54px"} color="#323232"/>
        <h1>Adicione seu primeiro projeto</h1>
        <p>Compartilhe seu talento com milhares de pessoas</p>
      </CardWithoutProjectSC>
      <BlankCardSC />
      <BlankCardSC />
    </ProjectCardSC>
  );
}

export default ProjectCard;
