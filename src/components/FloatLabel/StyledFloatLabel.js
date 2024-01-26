import styled from 'styled-components';

export const LoginLabelContent = styled.form`
    
`;

export const SubtitleLoginLabel = styled.h4`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    @media (max-width: 1024px){
      font-size: 16px;
    }

    @media (max-width: 425px){
        font-size: 16px;
    }       

`;


export const LabelFloatContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 5px;
  outline: none;
  min-width: 250px;
  padding: 15px 20px;
  font-size: 16px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -webkit-appearance: none;
  width: 100%;

  &:focus {
    border: 2px solid #3951b2;
  }

  &::placeholder {
    color: transparent;
  };

  @media (max-width: 1024px) {
        width: 405px;
        background-color: black;
    };
`;

export const PasswordToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;