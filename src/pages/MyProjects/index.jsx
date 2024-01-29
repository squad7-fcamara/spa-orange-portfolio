import "../../reset.css";
import { Dashboard } from "../../GlobalStyled";
import ProjectStamp from "../../components/ProfileStamp";
import ProjectCard from "../../components/ProjectCard";
import SearchBar from "../../components/SearchBar";
import { userData } from "../../Data";

function MyProjects() {
  return (
    <Dashboard>
      <ProjectStamp userProfile={userData} />
      <SearchBar />
      <ProjectCard userProfile={userData} />
    </Dashboard>
  );
}

export default MyProjects;
