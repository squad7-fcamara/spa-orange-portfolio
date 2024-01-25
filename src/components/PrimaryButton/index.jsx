import { ButtonPrimary } from './StyledPrimaryButton'

const PrimaryButton = ({onClick, text}) => {
  return (
    <>
      <ButtonPrimary onClick={onClick}> {text}</ButtonPrimary>
    </>
  )
}

export default PrimaryButton