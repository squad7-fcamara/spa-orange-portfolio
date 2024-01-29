import { MdCollections } from "react-icons/md";
import { Card, ProjectCardSC } from "./style";

function ProjectCard({ userProfile }) {
  const userProjects = userProfile.lstProjeto;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
  };

  return (
    <ProjectCardSC>
      {userProjects.length <= 0 ? (
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
        userProjects.map((project) => (
          <Card
            key={project.idProjeto}
            className="card-with-project"
            imageProject={project.imagem}
          >
            <footer>
              <span>
                <img
                  src="/src/assets/images/profile-picture-default.svg"
                  alt="imagem de perfil"
                />
                <h1>
                  {userProfile.nome} {userProfile.sobrenome} •{" "}
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
