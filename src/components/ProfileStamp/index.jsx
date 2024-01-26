import { ProfileStampSC } from "./style";

function ProjectStamp() {
  return (
    <ProfileStampSC>
      <div>
        <img
          src="/src/assets/images/profile-picture-default.svg"
          alt="imagem de perfil"
        />
      </div>
      <div>
        <h1>Lorem ipsum</h1>
        <p>Brasil</p>
        <button>ADICIONAR PROJETO</button>
      </div>
    </ProfileStampSC>
  );
}

export default ProjectStamp;
