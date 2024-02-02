import { useEffect, useState } from "react";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import { DashboardSC } from "../../components/Dashboard/style";
import TemplateCard from "../../components/TemplateCard";
import UserProfileStamp from "../../components/UserProfileStamp";
import { getUserFullName } from "../../services/userService";
import { getAuthUserProjects } from "../../services/projectServices";

const MyPortfolio = () => {
  const [fullName, setFullName] = useState("");
  const [authUserProjects, setAuthUserProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userAuthId, setUserAuthId] = useState(0);

  // FIXME: PEGAR ID DO USUÁRIO LOGADO
  useEffect(() => {
    // IDs para testar funcionamento:
    //  - 99: Não existe
    //  -  6: sem projeto
    //  -  5: com projeto
    setUserAuthId(5);
  }, []);

  useEffect(() => {
    const loadAuthUserData = async (userId) => {
      const response = {
        fullName: await getUserFullName(userId),
        projects: await getAuthUserProjects(userId),
      };
      setFullName(response.fullName);
      setAuthUserProjects(response.projects);
      console.log(response.projects);
      setIsLoaded(true);
    };

    loadAuthUserData(userAuthId);
  }, [userAuthId]);

  return (
    <DashboardSC>
      {isLoaded ? (
        <>
          <UserProfileStamp isLoaded={isLoaded} fullName={fullName} />

          <ContainerProjectSC>
            {authUserProjects.length === 0 ? (
              <>
                <TemplateCard class={"add-project"} activated={isLoaded} />
                <TemplateCard class={"blank"} />
                <TemplateCard class={"blank"} />
              </>
            ) : (
              authUserProjects.map((project) => (
                <TemplateCard
                  key={project.idProjeto}
                  class={"with-project"}
                  userName={fullName}
                  projectDate={project.dataCriacao}
                />
              ))
            )}
          </ContainerProjectSC>
        </>
      ) : (
        "Carregando..."
      )}
    </DashboardSC>
  );
};

export default MyPortfolio;
