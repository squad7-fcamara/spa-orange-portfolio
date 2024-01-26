import { Dashboard } from "../../GlobalStyled";
import ProjectStamp from "../../components/ProfileStamp";
import ProjectCard from "../../components/ProjectCard";
import SearchBar from "../../components/SearchBar";

function MyProjects() {
  return (
    <Dashboard>
      <ProjectStamp />
      <SearchBar />
      <ProjectCard />
    </Dashboard>
  );
}

export default MyProjects;
