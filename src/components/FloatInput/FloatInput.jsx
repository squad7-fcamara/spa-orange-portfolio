import { useState } from 'react'

import { InputDiv } from "./StyledFloatInput"
import { FaEye, FaEyeSlash } from "react-icons/fa";

import './FloatInput_styles.css'

export default function FloatInput({label, type, classes}) {
  
const [showPassword, setShowPassword] = useState(false)

const handleClickShowPassword = () => {
  setShowPassword(!showPassword)
}

return (
    <>
      <InputDiv className="label" >     
        {
          type == "password" ? 
          <div>
                <span onClick={handleClickShowPassword} >{!showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                <input type={showPassword ? "text" : type} placeholder=" " className={classes} />
                <label>{label}</label>
          </div> : 

          <div>
            <input type={type} placeholder=" " className={classes} />
            <label>{label}</label>
          </div>
        }
        
      </InputDiv>
    </>
  );
}
