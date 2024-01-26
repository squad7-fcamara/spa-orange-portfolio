import { useState } from 'react'

import { InputDiv } from "./StyledFloatInput"
import { FaEye, FaEyeSlash } from "react-icons/fa";

import './FloatInput_styles.css'

export default function FloatInput({label, type, id_value, classes}) {
  
const [showPassword, setShowPassword] = useState(false)

const handleClickShowPassword = () => {
  setShowPassword(!showPassword)
}

return (
    <>
        {
          type == "password" ? 
          <InputDiv className="label password" >
            
                <span onClick={handleClickShowPassword} >{!showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                <input type={showPassword ? "text" : type} placeholder=" " className={classes} />
                <label>{label}</label>
                
          </InputDiv> : 

          <InputDiv className="label" >
            <input type={type} id={id_value} placeholder=" " className={classes} />
            <label>{label}</label>
          </InputDiv>
        }
        
    </>
  );
}
