import { useEffect, useState } from "react";
import { DashboardSC } from "../../components/Dashboard/style";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import { getUserFullName } from "../../services/userService";
import { getAuthUserProjects } from "../../services/projectServices";
import TemplateCard from "../../components/TemplateCard";
import UserProfileStamp from "../../components/UserProfileStamp";
import ModalCardAdd from "../../components/ModalCardAdd";
import ModalCardEdit from "../../components/ModalCardEdit";

const MyPortfolio = () => {
  const [fullName, setFullName] = useState("");
  const [authUserProjects, setAuthUserProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO: PEGAR ID DO USUÁRIO LOGADO
  // IDs para testar funcionamento:
  //  - 99: Não existe
  //  -  6: sem projeto
  //  -  5: com projeto
  const [userAuthId, setUserAuthId] = useState(6);

  useEffect(() => {
    const loadAuthUserData = async (userId) => {
      const response = {
        fullName: await getUserFullName(userId),
        projects: await getAuthUserProjects(userId),
      };
      setFullName(response.fullName);
      setAuthUserProjects(response.projects);
      setIsLoaded(true);
    };

    loadAuthUserData(userAuthId);
  }, [userAuthId]);

  return (
    <DashboardSC>
      {isLoaded ? (
        <>
          <UserProfileStamp isLoaded={isLoaded} fullName={fullName} />

          {/* <ModalCardAdd /> */}
          {/* <ModalCardEdit /> */}
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
