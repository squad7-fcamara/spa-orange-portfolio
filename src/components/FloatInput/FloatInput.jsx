import { useState } from 'react'

import { InputDiv } from "./StyledFloatInput"
import { FaEye, FaEyeSlash } from "react-icons/fa";

import './FloatInput_styles.css'

export default function FloatInput({value, label, name, type, id_value, classes, register, required}) {

  
  
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
                <input 
                type={showPassword ? "text" : type}
                name={name}
                placeholder=" " 
                className={"col-maxWidth " + classes} 
                {...register(label, { required: "A senha deve conter mais de 6 caracteres.", minLength:3 })}
                />
                <label>{label}</label>
                
          </InputDiv> : 

          <InputDiv className="label" >
            <input type={type} 
            defaultValue={ value ? value : '' }
            name={name}
            id={id_value} 
            placeholder=" " 
            className={"col-maxWidth " + classes} 
            {...register(label, { required: required })}
            />
            <label>{label}</label>
          </InputDiv>
        }
        
    </>
  );
}
