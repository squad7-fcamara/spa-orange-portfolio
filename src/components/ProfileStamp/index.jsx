import SecondaryButton from "../SecondaryButton";
import { ProfileStampSC } from "./style";

function ProjectStamp({ fullName, onClick }) {
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
        <SecondaryButton onClick={onClick} text={'ADICIONAR PROJETO'} />
      </div>
    </ProfileStampSC>
  );
}

export default ProjectStamp;
