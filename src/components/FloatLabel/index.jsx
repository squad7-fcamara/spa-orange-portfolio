// import React from 'react';
import FloatInput from "../FloatInput/FloatInput"



import "./style.css"
import { LoginLabelContent, SubtitleLoginLabel } from "./StyledFloatLabel";


const FloatLabel = () => {

  return (
    <LoginLabelContent>
      <SubtitleLoginLabel>Faça Login com email</SubtitleLoginLabel>
      <div className="label-float">
        <FloatInput label="Email Address" type="text" class="email-label" />
      </div>

      {/* PARA OLHAR ISSO DEPOIS
    Input do password com efeito toggle
    ao mudar a visibilidade, ele deve alternar entre:
     o input "text" e o input "password" */}
      <div className="label-float">

        <FloatInput label="Password" type="password" class="input-field" />

      </div>
    </LoginLabelContent>
  )
}

export default FloatLabel