import styled from "styled-components";

const mobileL="425px";
const mobileM="375px";
const mobileS="320px";

export const BackgroundFilter=styled.span` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display:;
    z-index: 20;

    @media (max-width: ${mobileL}){
        width: 100%;
        height: 2000px;
        
        position: absolute;
        top: 0;
        left: 0;
    }
    @media (max-width: ${mobileM}) {
        width: 100%;
        height: 2000px;
        
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const CardVisualProject=styled.div`
    width: 900px;
    height: 500px;
    margin: 95px auto;
    left: 207px;
    flex-shrink: 0;
    border-radius: var(--none, 0px);
    background: #FEFEFE;

        @media (max-width: ${mobileL}){
            width: calc(100% - 40px);
            margin: 120px 20px;
            height: 900px;
        };
        
`;
export const ContainerProject=styled.div` 
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 32px;
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;

    @media (max-width: ${mobileL}){
        
        max-width: 425px;
        padding: 0 auto;
        width: 385px;
        height: 100%;
        margin: 0;
    };
    @media (max-width: ${mobileM}) {
        width: 273px;
    }
    @media (max-width: ${mobileS}) {
        
        padding: 20px;
        width: 280px;
    }
`;

export const Title=styled.h1` 
grid-row: 1;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
width: 100%;
margin-bottom: 5px;

    @media (max-width: ${mobileL}){  
        width: 320px;
        grid-row: 1;
    };
    @media (max-width: ${mobileM}) {
        width: 273px;
    }
    @media (max-width: ${mobileS}) {
        width: 242px;
    }
`;

export const PerfilImage = styled.span`
    grid-row: 1;
    width: 30px;
    height: 30px;
`

export const TagProjects = styled.div`
    grid-row: 1;
    width: fit-content;
    height: 24px;
    font-family: 13px;
    color: #000000de;
    text-align: center;
    padding: 12px;
    border-radius: 100px;
    background-color: #00000014;
`