import { ProfileStampSC } from "./style";

function ProjectStamp({ userProfile }) {
  const { nome, sobrenome } = userProfile;
  return (
    <ProfileStampSC>
      <div>
        <img
          src="/src/assets/images/profile-picture-default.svg"
          alt="imagem de perfil"
        />
      </div>
      <div>
        <h1>
          {nome} {sobrenome}
        </h1>
        <p>Brasil</p>
        <button>ADICIONAR PROJETO</button>
      </div>
    </ProfileStampSC>
  );
}

export default ProjectStamp;
