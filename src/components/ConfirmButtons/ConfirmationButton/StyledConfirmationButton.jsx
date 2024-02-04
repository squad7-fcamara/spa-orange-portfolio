import styled from "styled-components"
// const laptop="1024px";
// const tablet="768px";
const mobileL="425px";
const mobileM="375px";
const mobileS="320px";

export const BackgroundFilter=styled.span` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background-color: rgba(0, 0, 0, 0.5);
    display:;
    z-index: 10;

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

export const ModalContentConfirmCard=styled.div`
max-height: 300px;    
width: 375px;
    height: 225px;
    margin: 15% auto;
    left: 207px;
    flex-shrink: 0;
    border-radius: var(--none, 0px);
    background: #FEFEFE;

        @media (max-width: ${mobileL}){
            width: calc(100% - 40px);
            margin: 40% auto;
            
        };
        
    `;
export const Container=styled.div` 

    max-width: 1200px;
    margin:  auto;
    padding: 30px 45px;
    height: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 5px;
    
    grid-column-gap: 20px;

    @media (max-width: ${mobileL}){
        
        max-width: 425px;
        padding: 0 auto;
        width: 385px;
        height: 100%;
        margin: 0;
    };
    @media (max-width: ${mobileM}) {
        
        padding: 30px 20px;
        width: 100%;
    }
    @media (max-width: ${mobileS}) {
        
        width: 100%;
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
    text-align: center; 
    margin-bottom:5px;
    
`;
export const IconSuccessPlace = styled.div`
    grid-row: 2;
    display: flex;  
    margin: 5px auto;

    @media (max-width: ${mobileM}) {
        margin: 5px auto;
        .success{

            width:40px;
            height:40px;

        }
    }
    `;
    
    
    
    export const ButtonPlace = styled.div`
    
    grid-row: 3;
    width:100%;
    display: flex;  
    justify-content: flex-start;
    padding-right: 0;
    justify-content: space-between;

    button {
        font-size: 15px;
        padding: 16px;
        width: 100%;
        margin:  auto;
    }
    @media (max-width: ${mobileM}) {
        
        button {
            font-size: 14px;
            padding: 10px;
            width: 100%;
            margin: 0 auto;
        }
    }
`