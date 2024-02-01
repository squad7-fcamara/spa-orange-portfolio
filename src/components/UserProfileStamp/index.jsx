import {
  AddProjectButtonSC,
  ProfilePictureSC,
  SectionSC,
  UserCountrySC,
  UserNameSC,
  UserProfileStampSC,
} from "./style";
import profilePictureDefault from "../../assets/images/profile-picture-default.svg";
import { useEffect, useState } from "react";

const UserProfileStamp = (props) => {
  const [profilePicture, setProfilePicture] = useState(profilePictureDefault);
  const [userName, setUserName] = useState("Carregando...");
  const [userCountry, setUserCountry] = useState("...");
  const [btnLabel, setBtnLabel] = useState("...");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setUserName(props.fullName || "Lorem Ipsum");
    setProfilePicture(props.userPicture || profilePictureDefault);
    setUserCountry("Brasil");
    setBtnLabel("ADICIONAR PROJETO");
  }, [props.fullName, props.userPicture]);

  return (
    <UserProfileStampSC>
      <ProfilePictureSC src={profilePicture} alt="imagem de perfil" />
      <SectionSC>
        <UserNameSC>{userName}</UserNameSC>
        <UserCountrySC>{userCountry}</UserCountrySC>
        <AddProjectButtonSC $activated={isLoaded} disabled={!isLoaded}>
          {btnLabel}
        </AddProjectButtonSC>
      </SectionSC>
    </UserProfileStampSC>
  );
};

export default UserProfileStamp;
