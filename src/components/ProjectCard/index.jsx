import { useState } from "react"

import { MdCollections } from "react-icons/md";
import { CardWithoutProjectSC, BlankCardSC, ProjectCardSC } from "./style";
import ModalEdit from "../ModalEdit";


function ProjectCard() {

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // Listening do mouse - Versão para PC - OBS: Não coonsegui alternar na versão mobile .
  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };



  return (
    <>
      <ProjectCardSC>

        <CardWithoutProjectSC
          className="card-without-project-sc"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isButtonVisible && <ModalEdit />}
          <MdCollections size={"54px"} color="#323232" />
          <h1>Adicione seu primeiro projeto</h1>
          <p>Compartilhe seu talento com milhares de pessoas</p>
        </CardWithoutProjectSC>
        <BlankCardSC />
        <BlankCardSC />
      </ProjectCardSC>
    </>
  );
}

export default ProjectCard;
