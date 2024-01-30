import { ProfileStampSC } from "./style";

function ProjectStamp({ fullName }) {
  return (
    <ProfileStampSC>
      <div>
        <img
          src="/src/assets/images/profile-picture-default.svg"
          alt="imagem de perfil"
        />
      </div>
      <div>
        <h1>{fullName}</h1>
        <p>Brasil</p>
        <button>ADICIONAR PROJETO</button>
      </div>
    </ProfileStampSC>
  );
}

export default ProjectStamp;
