import "../../reset.css";
import { useEffect, useState } from "react";
import { Dashboard } from "../../GlobalStyled";
import ProjectStamp from "../../components/ProfileStamp";
import ProjectCard from "../../components/ProjectCard";
import SearchBar from "../../components/SearchBar";
import { getUsuarioProjetoByIdUsuario } from "../../services/userServices";
import ModalCardAdd from "../../components/ModalCardAdd";
import ModalCardEdit from "../../components/ModalCardEdit";

function MyProjects() {
  const [userData, setUserData] = useState({
    nome: "",
    sobrenome: "",
    lstProjeto: [],
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getUsuarioProjetoByIdUsuario();
      setUserData(response.data);
    }

    fetchData();
  }, []);

  const fullName = `${userData.nome} ${userData.sobrenome}`;
  const projects = userData.lstProjeto;
  const projectData = { fullName, projects };

  return (<>
     <ModalCardAdd />
    {/* <ModalCardEdit /> */}
    <Dashboard>
      <ProjectStamp fullName={fullName} />
      <SearchBar />
      <ProjectCard projectData={projectData} />
    </Dashboard>
  </>
  );
}

export default MyProjects;
