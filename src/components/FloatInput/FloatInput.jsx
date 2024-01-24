import { InputDiv } from "./StyledFloatInput"

import './FloatInput_styles.css'

export default function FloatInput({label, type, classes}) {
  return (
    <>
      <InputDiv className="label" >
        <input type={type} placeholder=" " className={classes} />
        <label>{label}</label>
      </InputDiv>
    </>
  );
}
