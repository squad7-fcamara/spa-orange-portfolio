import styled from 'styled-components';


export const AppContainer = styled.div`
    margin: 0;
    display: flex;
    width: 100vw;
`;


export const Image = styled.img`
    height: 100vh;  
`;


export const SignUpContainer = styled.div`
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;

export const NameColumn = styled.div`
    display: flex;
    gap: 1rem;
`;


export const SignUpButton = styled.button`
    margin-top: 1rem;
    width: 100%;
    padding: 1rem;
    background-color: #F52;
    border: none;
    color: white;
    font-weight: 500;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    font-size: 0.9375rem;
    transition: 0.5s;
`