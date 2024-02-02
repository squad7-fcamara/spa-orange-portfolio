import { DashboardSC } from "../../components/Dashboard/style";
import CommunityHeader from "../../components/CommunityHeader";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import TemplateCard from "../../components/TemplateCard";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices";

const Community = () => {
  const [projectsList, setProjectsList] = useState([]);

  // TODO: PEGAR ID DO USUÁRIO LOGADO
  // IDs para testar funcionamento:
  //  - 99: Não existe
  //  -  6: sem projeto
  //  -  5: com projeto
  const [userAuthId, setUserAuthId] = useState(4);

  useEffect(() => {
    async function loadProjects(excludeId) {
      const response = await getAllProjects(excludeId);
      setProjectsList(response);
    }

    loadProjects(userAuthId);
  }, [userAuthId]);

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
