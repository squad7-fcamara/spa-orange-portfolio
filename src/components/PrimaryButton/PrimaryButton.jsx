import { ButtonPrimary } from "./StyledPrimaryButton";

const PrimaryButton2 = ({ type = "button", onClick, text}) => {
  return (
    <>
      <ButtonPrimary type={type} onClick={onClick}>
          {text}
      </ButtonPrimary>
    </>
  );
};

export default PrimaryButton2;
