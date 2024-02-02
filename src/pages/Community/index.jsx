import { DashboardSC } from "../../components/Dashboard/style";
import CommunityHeader from "../../components/CommunityHeader";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import TemplateCard from "../../components/TemplateCard";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/userServices";

const Community = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await getAllProjects();
      setProjectsList(response);
    }

    loadProjects();
  }, []);

  return (
    <DashboardSC>
      {projectsList.length <= 0 ? (
        "Carregando..."
      ) : (
        <>
          <CommunityHeader />
          <ContainerProjectSC>
            {projectsList.map((project) => (
              <TemplateCard
                key={project.idProjeto}
                class={"with-project"}
                userName={project.nomeCompleto}
                projectDate={project.dataCriacao}
              />
            ))}
          </ContainerProjectSC>
        </>
      )}
    </DashboardSC>
  );
};

export default Community;
