import { MdCollections } from "react-icons/md";
import { Card, ProjectCardSC } from "./style";
import { useLocation } from "react-router-dom";
import ModalEdit from "../ModalEdit";
import { useState } from "react";
import ModalCardEdit from "../ModalCardEdit";

function ProjectCard({ projectData }) {
  const { fullName, projects } = projectData;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
  };
  const { pathname } = useLocation();

  const [modalEditIsClosed, setModalEditIsClosed] = useState(true)
  
  const [selectedProject, setSelectedProject] = useState(null)

  const handleSelectedProject = (project) => {
    setSelectedProject(project)
  }

  console.log(selectedProject);

  return (
    <>
    {!modalEditIsClosed && <ModalCardEdit selectedProject={selectedProject} closed={ modalEditIsClosed } onClose={() => setModalEditIsClosed(true)} />}
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
        projects.map((project, index) => (
          <div key={index}>
          <Card
            key={project.idProjeto}
            className="card-with-project"
            $imageProject={project.imagem}
            $profilePage={pathname !== "/my-projects" ? "none" : "initial"}
          >
            <header onClick={() => handleSelectedProject(project)}>
              <ModalEdit  onOpen={() => setModalEditIsClosed(false)} />
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
          </div>
        ))
      )}
    </ProjectCardSC>
    </>
  );
}

export default ProjectCard;
