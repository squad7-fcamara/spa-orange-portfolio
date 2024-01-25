import { Dashboard } from "../../GlobalStyled";
import ProjectCard from "../../components/ProjectCard";
import SearchBar from "../../components/SearchBar";

function MyProjects() {
  return (
    <Dashboard>
      <SearchBar />
      <ProjectCard />
    </Dashboard>
  );
}

export default MyProjects;
