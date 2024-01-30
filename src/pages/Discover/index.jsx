import "../../reset.css";
import { Dashboard } from "../../GlobalStyled";
import SearchBar from "../../components/SearchBar";
import { projects } from "../../Data";
import ProjectCard from "../../components/ProjectCard";

function Discover() {
  return (
    <Dashboard>
      <header>
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </header>
      <SearchBar />
      <ProjectCard projectData={{ projects }} />
    </Dashboard>
  );
}

export default Discover;
