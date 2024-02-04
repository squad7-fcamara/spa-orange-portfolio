import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices";
import { DashboardSC } from "../../components/Dashboard/style";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import TemplateCard from "../../components/TemplateCard";
import loader from "../../assets/images/Orange-loader.gif";

const Community = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userAuthId, setUserAuthId] = useState(undefined);

  useEffect(() => {
    async function loadProjects(excludeId) {
      const response = await getAllProjects(excludeId);
      setProjectsList(response);
      setIsLoaded(true);
    }

    setUserAuthId(sessionStorage.getItem("userId"));
    loadProjects(userAuthId);
  }, [userAuthId]);

  return (
    <DashboardSC>
      {!isLoaded ? (
        <img src={loader} alt="loader" />
      ) : projectsList.length > 0 ? (
        <>
          {/* <ModalCardAdd /> */}
          <ContainerProjectSC>
            {projectsList.map((project) => (
              <TemplateCard
                key={project.idProjeto}
                class={"with-project"}
                projectImage={project.arquivoImagem?.fileContents}
                imageType={project.arquivoImagem?.contentType}
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
  );
};

export default Community;
