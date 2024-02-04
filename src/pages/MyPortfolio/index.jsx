import { useEffect, useState } from "react";
import { DashboardSC } from "../../components/Dashboard/style";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import { getUserFullName } from "../../services/userService";
import { getAuthUserProjects } from "../../services/projectServices";
import loader from "../../assets/images/Orange-loader.gif";
import UserProfileStamp from "../../components/UserProfileStamp";
import TemplateCard from "../../components/TemplateCard";
import ModalCardAdd from "../../components/ModalCardAdd";
import ModalCardEdit from "../../components/ModalCardEdit";
import DeleteConfirmationButton from "../../components/ConfirmButtons/DeleteConfirmationButton";

const MyPortfolio = () => {
  const [fullName, setFullName] = useState("");
  const [authUserProjects, setAuthUserProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO: PEGAR ID DO USUÁRIO LOGADO
  // IDs para testar funcionamento:
  //  - 99: Não existe
  //  -  6: sem projeto
  //  -  5: com projeto
  const [userAuthId, setUserAuthId] = useState(4);

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
  }, [userAuthId, authUserProjects]);

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalEditIsClosed, setModalEditIsClosed] = useState(true)
  const [modalExclude, setModalExclude] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleSelectedProject = (project) => {
    setSelectedProject(project)
  }

  return (
    <>
    { modalAddIsOpen && <ModalCardAdd closeModal={ () => setModalAddIsOpen(false) }  />}
    {!modalEditIsClosed && <ModalCardEdit selectedProject={selectedProject} closed={ modalEditIsClosed } onClose={() => setModalEditIsClosed(true)} />}
    {modalExclude && <DeleteConfirmationButton selectedProject={selectedProject} closed={ modalExclude } onOpen={() => setModalExclude(true)} onClose={() => setModalExclude(false)} />}
    <DashboardSC>
      {isLoaded ? (
        <>
          <UserProfileStamp onClick={() => setModalAddIsOpen(true)} isLoaded={isLoaded} fullName={fullName} />

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
                  setModalEditIsClosed={() => setModalEditIsClosed(false)}
                  setModalExclude={() => setModalExclude(true)}
                  project={project}
                  handleSelectProject={handleSelectedProject}
                  key={project.idProjeto}
                  class={"with-project"}
                  projectImage={project.arquivoImagem?.fileContents}
                  imageType={project.arquivoImagem?.contentType}
                  userName={fullName}
                  projectDate={project.dataCriacao}
                  fullName={fullName}
                />
              ))
            )}
          </ContainerProjectSC>
        </>
      ) : (
        <img src={loader} alt="loader" />
      )}
    </DashboardSC>
    </>
  );
};

export default MyPortfolio;
