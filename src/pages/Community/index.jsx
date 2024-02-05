import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/projectServices";
import { DashboardSC } from "../../components/Dashboard/style";
import { ContainerProjectSC } from "../../components/ContainerProjects/style";
import TemplateCard from "../../components/TemplateCard";
import loader from "../../assets/images/Orange-loader.gif";
import CommunityHeader from "../../components/CommunityHeader";
import SearchBar from "../../components/SearchBar";
import { api } from "../../api/apiRest";
import ModalVisualSingleProjects from "../../components/ModalVisualSingleProjects";

const Community = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userAuthId, setUserAuthId] = useState(undefined);
  const [search, setSearch] = useState('')
  const [selectProjet, setSelectProject] = useState()
  const [modalShowSelectedProject, setModalShowSelectedProject] = useState(false)

  useEffect(() => {

    
    async function loadProjects(excludeId) {
      const response = await getAllProjects(excludeId);
      
      if (search == "") {
        setProjectsList(response);
        setIsLoaded(true);
      } else {
        const response = await api.get(`/projeto/getComunidade?tags=${search}`)
        setProjectsList(response.data)
        setIsLoaded(true);
      }

    }

    setUserAuthId(sessionStorage.getItem("userId"));
    loadProjects(userAuthId);
  }, [userAuthId, search, projectsList]);

  useEffect(()=> {
    
  },[
     //dependencyArray
  ])

  const handleSearch = (tags) => {
    const formattedTags = `${tags.join(';')}`;
    setSearch(formattedTags)
  };

  return (
    <>
    {modalShowSelectedProject && <ModalVisualSingleProjects projectSelected={selectProjet} onCloseModal={() => setModalShowSelectedProject(false)} />}
      <DashboardSC>
        {!isLoaded ? (
          <img src={loader} alt="loader" />
        ) : (
          <>
              <CommunityHeader />
              <SearchBar  getSearch={ handleSearch }  />
            <ContainerProjectSC>
              {projectsList.map((project) => (
                <TemplateCard
                  key={project.idProjeto}
                  class={"with-project"}
                  projectImage={project.arquivoImagem?.fileContents}
                  imageType={project.arquivoImagem?.contentType}
                  userName={project.nomeCompleto}
                  projectDate={project.dataCriacao}
                  select={() => { setSelectProject(project); setModalShowSelectedProject(true) }}
                />
              ))}
            </ContainerProjectSC>
          </>
        )}
      </DashboardSC>
    </>
  );
};

export default Community;
