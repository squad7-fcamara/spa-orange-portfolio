import "../../reset.css";
import { useEffect, useState } from "react";
import { Dashboard } from "../../GlobalStyled";
import ProjectStamp from "../../components/ProfileStamp";
import ProjectCard from "../../components/ProjectCard";
import SearchBar from "../../components/SearchBar";
import { api } from "../../api/apiRest";

function MyProjects() {
  const [userData, setUserData] = useState({
    nome: "",
    sobrenome: "",
    lstProjeto: [],
  });

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchData() {
      if (search == "") {
        const response = await api.get(`/usuario/getUsuarioProjetoByIdUsuario?idUsuario=4`)
        setUserData(response.data);
        setProjects(response.data.lstProjeto)
      } else {
        const response = await api.get(`/projeto/getByTags?idUsuario=4&tags=${search}`)
        setProjects(response.data)
        console.log(response)
      }

    }

    fetchData();
  }, [search]);

  const handleSearch = (tags) => {
    const formattedTags = `${tags.join(';')}`;
    setSearch(formattedTags)
  };

  const fullName = `${userData.nome} ${userData.sobrenome}`;

  return (
    <Dashboard>
      <ProjectStamp fullName={ fullName } />
      <SearchBar getSearch={ handleSearch } />
      <ProjectCard projects={ projects } fullName={ fullName } />
    </Dashboard>
  );
}

export default MyProjects;
