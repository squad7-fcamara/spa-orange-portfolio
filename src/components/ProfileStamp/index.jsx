import { ProfileStampSC } from "./style";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

function ProjectStamp() {

  const auth = useContext(AuthContext)

  

  return (
    <ProfileStampSC>
      <div>
        <img
          src="/src/assets/images/profile-picture-default.svg"
          alt="imagem de perfil"
        />
      </div>
      <div>
        <h1>{auth.user.nome} {auth.user.sobrenome} </h1>
        <p>Brasil</p>
        <button>ADICIONAR PROJETO</button>
      </div>
    </ProfileStampSC>
  );
}

export default ProjectStamp;
