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
    height: 100vh;
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

export const ModalContentCardAdd=styled.div`
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
export const Container=styled.div` 
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

export const ColumnImage=styled.div` 
    grid-row: 2;
    grid-column: span 1;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${mobileL}){
        width: 320px;
        grid-row: 3;
    };
    @media (max-width: ${mobileM}) {
        width: 273px;
    }
    @media (max-width: ${mobileS}) {
        width: 242px;
    }
`;

export const ColumnContent=styled.div` 
    grid-row: 2;
    grid-column: span 1;
    width: 100%;
    display: flex;
    gap: 0 1rem;

    @media (max-width: 1060px) {
        width: 320px;
        
        flex-direction: column;
        gap: 0rem;
    }
    @media (max-width: ${mobileM}) {
    
    width: 273px;
    }
    
`;
export const FooterSubtitleContent=styled.div` 
    grid-row: 3;
    grid-column: span 1;
    width: 100%;
    display: flex;
    gap: 0 1rem;

    @media (max-width: 1060px) {
        // display: flex;
        flex-direction: column;
    }
    @media (max-width: ${mobileL}){
        width: 320px;
        grid-row: 4;
    };

    @media (max-width: ${mobileM}) {
        width: 273px;
    }
    @media (max-width: ${mobileS}) {
        width: 242px;
    }

`;
export const FooterButtonContent=styled.div`
    grid-row: 4;
    grid-column: span 1;
    width: 100%;
    display: flex;
    gap: 0;

    button {
        margin-top: 0;
        margin-right: 24px;
    }
    @media (max-width: ${mobileL}){
        
        width: 320px;
        grid-row: 5;
        justify-content: space-between;
        align-items: center;
        flex-direction: none;
        flex-direction: row;
    

        button {
            
            width: 95px;
            padding: 16px 5px;
            font-size: 16px;
        };
        @media (max-width: ${mobileM}) {
            margin: 0 auto;
            width: 273px;
        }
        @media (max-width: ${mobileS}) {
            margin: 0 auto;
            width: 242px;
        }
    };


`;

export const Subtitle=styled.p`
    cursor:pointer; 
    
    width:100%;
    margin-bottom:10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color:rgba(81, 82, 85, 1);
    line-height: 12px;
    letter-spacing: 0.15px;

    @media (max-width: ${mobileL}){
        font-size:13px;
    };
`;

export const TextArea = styled.div`
    position: relative;
    padding-top: 13px;
    width: 100%;
`

export const Content=styled.div`
    width: 100%;
    

    h3 {
        margin-bottom: 8px;
    };

    form {

        padding-top: 0;
        grid-column: span 2;
        width: 100%;
        font-size: 14px;
        
        ;
        
    };
    
    @media (max-width: ${mobileL}){
        
        width: 320px;
        
        .alert {
            display:none;
        };
    }
    @media (max-width: ${mobileM}) {
        
        width: 273px;
    }
    @media (max-width: ${mobileS}) {
        width: 242px;
    }

    
`;

export const Image = styled.div`
    width: 389px;
    height: 304px;

    &.card-without-add-image {
        color: #303133;
        background-color: #e6e9f2;
        item-align: center;
        box-shadow: 1px 4px 4px rgba(230, 233, 242, 1);
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            display: none;
        }

        @media (max-width: ${mobileL}) {
            
            width: 320px;
        }

        @media (max-width: ${mobileM}) {
            width: 273px;
        }

        @media (max-width: ${mobileS}) {
         
            width: 242px;
        }
    }

    &.card-with-project {
        background: ${(props) => `url(${props.imageproject})`}; 
        background-size: cover;

        img {
            border-radius: 4px;
        }
    }

    &.card-without-project:hover,
    &.card-with-project:hover {
        cursor: pointer;
        transform: translate(-3px, -6px);
    }

    &.card-with-project:hover {
        header > div:only-child {
            opacity: 1;
        }
    }
`;

export const ButtonContainer=styled.div` 
    cursor: pointer;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text-add {
        color: rgba(48, 49, 51, 1);
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0.25px;
        margin-top: 16px;
    }

    

`;