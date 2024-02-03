import { ButtonSecondary } from './StyledSecondaryButton'

const SecondaryButton = ({type ="buttton",onClick, text}) => {
  return (
    <>
      <ButtonSecondary type={type} onClick={onClick}> {text}</ButtonSecondary>
    </>
  )
}

export default SecondaryButton