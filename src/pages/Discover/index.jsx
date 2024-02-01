import "../../reset.css";
import { useEffect, useState } from "react";
import { Dashboard } from "../../GlobalStyled";
import SearchBar from "../../components/SearchBar";
import ProjectCard from "../../components/ProjectCard";
import { api } from "../../api/apiRest";
import { getProjects } from "../../services/projectServices";

function Discover() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchData() {
      
      if (search == "" ) {
        const response = await getProjects();
        setProjects(response.data);
      } else {
        const response = await api.get(`/projeto/getByTags?tags=${search}`)
        setProjects(response.data);
      }
    }

    fetchData();

  }, [search]);


  const handleSearch = (tags) => {
    const formattedTags = `${tags.join(';')}`;
    setSearch(formattedTags)
  };


  return (
    <Dashboard>
      <header>
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </header>
      <SearchBar getSearch={ handleSearch } />
      <ProjectCard projects={ projects } />
      {/* TODO: getUserById para preencher os dados do projeto. */}
    </Dashboard>
  );
}

export default Discover;
