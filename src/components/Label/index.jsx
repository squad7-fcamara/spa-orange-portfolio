// import React from 'react';
import "./style.css"
import {LoginLabelContent, SubtitleLoginLabel} from "./StyledFloatLabel";

const FloatLabel = () => {
  return (
  <LoginLabelContent>
    <SubtitleLoginLabel>Faça Login com email</SubtitleLoginLabel>
    <div className="label-float">
        <input type="text" placeholder=" "/>
        <label>Email adress</label>
    </div>
    <div className="label-float">
        <input type="password" placeholder=" "/>
        <label>Password</label>
    </div>
  </LoginLabelContent>
  )
}

export default FloatLabel