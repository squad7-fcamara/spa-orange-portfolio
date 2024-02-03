import { ButtonPrimary } from './StyledPrimaryButton'

const PrimaryButton = ({type ="buttton", onClick, text}) => {
  return (
    <>
      <ButtonPrimary type={type} onClick={onClick}> {text}</ButtonPrimary>
    </>
  )
}

export default PrimaryButton