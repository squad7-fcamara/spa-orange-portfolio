import "../../reset.css";
import { useEffect, useState } from "react";
import { Dashboard } from "../../GlobalStyled";
import SearchBar from "../../components/SearchBar";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../services/projectServices";

function Discover() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getProjects();
      setProjects(response.data);
    }

    fetchData();
  }, []);

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
