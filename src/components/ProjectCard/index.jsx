import { MdCollections } from "react-icons/md";
import { CardSC } from "./style";

function ProjectCard() {
  return (
    <CardSC>
      <MdCollections size={"5.4rem"} />
      <h1>Adicione seu primeiro projeto</h1>
      <p>Compartilhe seu talento com milhares de pessoas</p>
    </CardSC>
  );
}

export default ProjectCard;
