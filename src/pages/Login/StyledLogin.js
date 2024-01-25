import styled from 'styled-components';
import myImage from '../../assets/img/img-login/img_login.png';

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
`

export const ImageContainer = styled.div`
    flex-shrink: 0;
    
    @media (max-width: 425px) {
    display: none;
  }
`;

export const HeroImage = styled.div`
    width: 525px;
    height: 641px;
    background-size: cover;
    background-image: url(${myImage});
    background-position: left top;
`;

export const ContentContainer = styled.div`
    flex-grow: 1;
    display: flex;
    margin-left: 123px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 425px) {
    align-items: center;
    margin: 24px;
    }
`;

export const Title = styled.h1`
    font-size: 45px;
    font-weight: 400;
    text align: center;

    @media (max-width: 425px){
        font-size: 24px;
    }
`;

export const Cadastro = styled.div`
    width: 100%;
    margin-top: 0;
    text-align: left;
    a {
        
        color: #818388;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: .15px;   }
`
export const LinkCadastro = styled.a`
margin-left:0
`

