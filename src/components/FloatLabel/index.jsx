// import React from 'react';
import FloatInput from "../FloatInput/FloatInput"



import "./style.css"
import { LoginLabelContent, SubtitleLoginLabel } from "./StyledFloatLabel";


const FloatLabel = ({handleInputPassWord, handleInputText}) => {

  return (
    <LoginLabelContent>
      <SubtitleLoginLabel>Faça Login com email</SubtitleLoginLabel>
      <div className="label-float">
        <FloatInput label="Email Address" id="login-email" type="text" class="email-label" 
        handleInputText={handleInputText}/>
      </div>

      {/* PARA OLHAR ISSO DEPOIS
    Input do password com efeito toggle
    ao mudar a visibilidade, ele deve alternar entre:
     o input "text" e o input "password" */}
      <div className="label-float">

        <FloatInput label="Password" handleInputPassWord={handleInputPassWord} type="password" class="passsword-label" />

      </div>
    </LoginLabelContent>
  )
}

export default FloatLabel