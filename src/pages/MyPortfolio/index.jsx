import { useEffect, useState } from "react";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import { DashboardSC } from "../../components/Dashboard/style";
import TemplateCard from "../../components/TemplateCard";
import UserProfileStamp from "../../components/UserProfileStamp";
import { getUserFullName } from "../../services/userService";
import { getAuthUserProjects } from "../../services/projectServices";

const MyPortfolio = () => {
  const [fullName, setFulName] = useState("");
  const [atuhUserProjects, setAtuhUserProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userAuthID, stUserAuthID] = useState(5);

  // FIXME: PEGAR ID DO USUÁRIO LOGADO
  // IDs para testar funcionamento:
  //  - 99: Não existe
  //  -  6: sem projeto
  //  -  5: com projeto

  useEffect(() => {
    const loadAuthUserData = async (userId) => {
      const response = {
        fullName: await getUserFullName(userId),
        projects: await getAuthUserProjects(userId),
      };
      setFulName(response.fullName);
      setAtuhUserProjects(response.projects);
      console.log(response.projects);
      setIsLoaded(true);
    };

    loadAuthUserData(userAuthID);
  }, []);

  return (
    <DashboardSC>
      {isLoaded ? (
        <>
          <UserProfileStamp isLoaded={isLoaded} fullName={fullName} />

          <ContainerProjectSC>
            {atuhUserProjects.length === 0 ? (
              <>
                <TemplateCard class={"add-project"} activated={isLoaded} />
                <TemplateCard class={"blank"} />
                <TemplateCard class={"blank"} />
              </>
            ) : (
              atuhUserProjects.map((project) => (
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
