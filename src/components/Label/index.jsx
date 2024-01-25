// import React from 'react';
import "./style.css"
import {LoginLabelContent, SubtitleLoginLabel} from "./StyledFloatLabel";
// , LabelFloatContainer, Input, PasswordToggle
import { useState } from "react";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const FloatLabel = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
  <LoginLabelContent>
    <SubtitleLoginLabel>Faça Login com email</SubtitleLoginLabel>
    <div className="label-float">
        <input type="text" className="email-label" placeholder=" "/>
        <label>Email address</label>
    </div>

    {/* PARA OLHAR ISSO DEPOIS
    Input do password com efeito toggle
    ao mudar a visibilidade, ele deve alternar entre:
     o input "text" e o input "password" */}
    <div className="label-float">
        <input
          type={showPassword ? 'text' : 'password'}
          className="input-field"
        />
        <label className="label">Password</label>
        <div className="password-toggle-container">
          <div className="toggle" onClick={handleTogglePasswordVisibility}>
            
            {showPassword ? <MdVisibilityOff className="visibility" /> : <MdVisibility className="visibility" />}
          </div>
        </div>
      </div>
  </LoginLabelContent>
  )
}

export default FloatLabel