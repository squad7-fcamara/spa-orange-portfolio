// import React from 'react'
import { ButtonPrimary } from './StyledPrimaryButton'

const PrimaryButton = ({onClick, children}) => {
  return (
    <>
      <ButtonPrimary onClick={onClick}> {children}</ButtonPrimary>
    </>
  )
}

export default PrimaryButton