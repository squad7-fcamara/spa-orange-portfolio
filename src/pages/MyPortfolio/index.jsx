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
import SearchBar from "../../components/SearchBar";
import { api } from "../../api/apiRest";
import './style.css'

const MyPortfolio = () => {
  const [fullName, setFullName] = useState("");
  const [authUserProjects, setAuthUserProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userAuthId, setUserAuthId] = useState(undefined);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadAuthUserData = async (userId) => {
      const response = {
        fullName: await getUserFullName(userId),
        projects: await getAuthUserProjects(userId),
      };
      setFullName(response.fullName);

    if (search == "") {
      setAuthUserProjects(response.projects);
      setIsLoaded(true);
    } else {
      const response = await api.get(`/projeto/getByUsuarioTags?idUsuario=${userAuthId}&tags=${search}`)
        setAuthUserProjects(response.data)
        console.log(response)
    }
    
    };

    setUserAuthId(sessionStorage.getItem("userId"));
    loadAuthUserData(userAuthId);
  }, [userAuthId, authUserProjects, search]);

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalEditIsClosed, setModalEditIsClosed] = useState(true);
  const [modalExclude, setModalExclude] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
  };

  const handleSearch = (tags) => {
    const formattedTags = `${tags.join(';')}`;
    setSearch(formattedTags)
  };


  return (
    <>
      {modalAddIsOpen && (
        <ModalCardAdd fullName={fullName} closeModal={() => setModalAddIsOpen(false)} />
      )}
      {!modalEditIsClosed && (
        <ModalCardEdit
          selectedProject={selectedProject}
          closed={modalEditIsClosed}
          onClose={() => setModalEditIsClosed(true)}
        />
      )}
      {modalExclude && (
        <DeleteConfirmationButton
          selectedProject={selectedProject}
          closed={modalExclude}
          onOpen={() => setModalExclude(true)}
          onClose={() => setModalExclude(false)}
        />
      )}
      <DashboardSC>
        {isLoaded ? (
          <>
            <UserProfileStamp
              onClick={() => setModalAddIsOpen(true)}
              isLoaded={isLoaded}
              fullName={fullName}
            />

            <label className="label-my-projects">Meus Projetos</label>
            <SearchBar getSearch={ handleSearch } />
            <ContainerProjectSC>
              {authUserProjects.length === 0 ? (
                <>
                  <TemplateCard class={"add-project"}  activated={isLoaded} />
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
