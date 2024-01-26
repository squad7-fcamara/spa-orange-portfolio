import styled from 'styled-components';


export const AppContainer = styled.div`
    margin: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
`;


export const Image = styled.img`
    height: 100vh;  

    @media (max-width: 1060px) {
        display: none;
    }
`;


export const SignUpContainer = styled.div`
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;


export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;

export const NameColumn = styled.div`
    display: flex;
    gap: 0 1rem;

    @media (max-width: 1060px) {
        // display: flex;
        flex-direction: column;
    }
`;
