import "../../reset.css";
import { Dashboard } from "../../GlobalStyled";
import ProjectStamp from "../../components/ProfileStamp";
import ProjectCard from "../../components/ProjectCard";
import SearchBar from "../../components/SearchBar";
import { userData } from "../../Data";

function MyProjects() {
  const { nome, sobrenome } = userData;
  const fullName = nome + " " + sobrenome;
  const projects = userData.lstProjeto;
  const projectData = { fullName, projects };

  return (
    <Dashboard>
      <ProjectStamp fullName={fullName} />
      <SearchBar />
      <ProjectCard projectData={projectData} />
    </Dashboard>
  );
}

export default MyProjects;
