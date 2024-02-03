import styled from "styled-components";

const mobileL="425px";
const mobileM="375px";
const mobileS="320px";

export const BackgroundFilter=styled.span` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 1000%;
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
    width: 980px;
    height: 600px;

    // OBSERVAR ISSO NO RESPONSIVO
    margin: 20px auto;
    padding: 48px auto 95px;

    left: 207px;
    flex-shrink: 0;
    border-radius: var(--none, 0px);
    background: #FEFEFE;
    overflow: auto;

        @media (max-width: ${mobileL}){
            width: calc(100% - 40px);
            margin: 120px 20px;
            height: 900px;
        };
    
    &::-webkit-scrollbar {
        display: none;
      }
`;
export const ContainerProject=styled.div` 
    max-width: 840px;
    margin: 0 auto;
    padding: 50px 30px;
    
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20   px;

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
font-size: 19px;
font-style: normal;
text-align: center;
font-weight: 400;
display:flex;
justify-content: center; 
align-items: center;
line-height: 24px;
width: 350px;


max-height: 75px;
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

export const PerfilImageDate = styled.span`
    grid-row: 1;
    width: 150px;
    height: 70px;
    display: flex;
    align-items: center;
    
    
    
    .perfil-image-project {
        
        width: 40px; 
        height: 40px; 
        border-radius: 50%;
        margin-right: 10px;
        background-color:blue;
    }


    .span-perfil-name-data {
        display: flex; 
        
        
        
        flex-direction: column;
        padding: 3px 0;

        .perfil-name {
            flex-wrap: wrap;
            width:150px;
            font-size: 14px; 
            font-style: normal;
            font-weight: 400;
            margin: 2px auto;
            
        }

        .data-project {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            color:rgba(81, 82, 85, 1);
            margin: 2px ;
        }
    }
    `
    
export const TagProjects = styled.div`
grid-row: 1;
display: flex;
flex-wrap: wrap; 
max-width: 215px;
width: 215px;
height: 70px;
font-size: 11px;
margin-right: 0;
color: #000000de;
justify-content: end; 
align-items: center;
text-align: end;

    p{
        word-break: break-all;  
        background-color:red;
        padding: 7px;
        border-radius: 100px;
        background-color: #00000014;
    }
`

export const ImagemProject = styled.div`
    grid-row: 2;
    grid-column: span 3;
    max-width: 800px;
    max-height: 500px;
    margin: 20px auto;
    width: 100%;
    height: 400px;
    background-color: #e6e9f2;
    item-align: center;
    box-shadow: 1px 4px 4px rgba(230, 233, 242, 1);
    align-items: center;
    display: flex;
`

export const DescriptionProject = styled.div`
    grid-row: 3;
    grid-column: span 3;
    width: 100%;
    margin-bottom: 40px;

    p.description-text {
        font-family: 'Roboto', sans-serif;
        font-size: 13px; 
        text-align: justify; 
        margin: 0;
    }
`;