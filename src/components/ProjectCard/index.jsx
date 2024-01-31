import { MdCollections } from "react-icons/md";
import { Card, ProjectCardSC } from "./style";
import { useLocation } from "react-router-dom";
import ModalEdit from "../ModalEdit";
import { useState } from "react";

function ProjectCard({ projectData }) {
  const { fullName, projects } = projectData;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
  };
  const { pathname } = useLocation();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // Listening do mouse - Versão para PC - OBS: Não coonsegui alternar na versão mobile .
  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <ProjectCardSC>
      {projects.length <= 0 ? (
        <>
          <Card className="card-without-project">
            <MdCollections className="icon" size={"54px"} color="#323232" />
            <h1>Adicione seu primeiro projeto</h1>
            <p>Compartilhe seu talento com milhares de pessoas</p>
          </Card>
          <Card className="blank-card" />
          <Card className="blank-card" />
        </>
      ) : (
        projects.map((project) => (
          <Card
            key={project.idProjeto}
            className="card-with-project"
            $imageProject={project.imagem}
            $profilePage={pathname !== "/my-projects" ? "none" : "initial"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <header>
              <div>{isButtonVisible && <ModalEdit />}</div>
            </header>
            <footer>
              <span>
                <img
                  src="/src/assets/images/profile-picture-default.svg"
                  alt="imagem de perfil"
                />
                <h1>
                  {project.nomeCompleto ? project.nomeCompleto : fullName} •{" "}
                  {formatDate(project.dataCriacao)}
                </h1>
              </span>
              {/* {project.tag.map((tag) => tag)} */}
              <div className="tag">{project.tag}</div>
            </footer>
          </Card>
        ))
      )}
    </ProjectCardSC>
  );
}

export default ProjectCard;
