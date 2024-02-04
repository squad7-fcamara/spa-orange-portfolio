import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices";
import { DashboardSC } from "../../components/Dashboard/style";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import CommunityHeader from "../../components/CommunityHeader";
import TemplateCard from "../../components/TemplateCard";
import ModalVisualSingleProjects from "../../components/ModalVisualSingleProjects";

import loader from "../../../public/icon.svg";

const Community = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalVisualSingleProjects,setModalVisualSingleProjects] = useState(true)

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
      setIsLoaded(true);
    }

    loadProjects(userAuthId);
  }, [userAuthId]);

  return (
    <>
    {
      modalVisualSingleProjects &&
      <ModalVisualSingleProjects setModalVisualSingleProjects={setModalVisualSingleProjects}/>
    }
    <DashboardSC>
      <CommunityHeader />
      {!isLoaded ? (
        <img src={loader} alt="loader" />
      ) : projectsList.length > 0 ? (
        <>
          
          <CommunityHeader />
          <ContainerProjectSC>
            {projectsList.map((project) => (
              <TemplateCard
                key={project.idProjeto}
                class={"with-project"}
                projectImage={project.arquivoImagem.fileContents}
                imageType={project.arquivoImagem.contentType}
                userName={project.nomeCompleto}
                projectDate={project.dataCriacao}
              />
            ))}
          </ContainerProjectSC>
        </>
      ) : (
        "Seja o primeiro a publicar seu projeto!"
      )}
    </DashboardSC>
    </>
  );
};

export default Community;