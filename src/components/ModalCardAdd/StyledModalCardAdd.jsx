import styled from "styled-components"
// const laptop="1280px";
// const tablet="1024px";
// const mobile="768px";

export const BackgroundFilter=styled.span` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display:;
    z-index: 10;
`;

export const ModalContentCardAdd=styled.div`
    width: 900px;
    height: 500px;
    margin: 95px auto;
    left: 207px;
    flex-shrink: 0;
    border-radius: var(--none, 0px);

    background: #FEFEFE;
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
`;

export const ColumnImage=styled.div` 
    grid-row: 2;
    grid-column: span 1;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title=styled.h1` 
    grid-row: 1;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;/ width: 100%;
    margin-bottom: 5px;
`;

export const ColumnContent=styled.div` 
    grid-row: 2;
    grid-column: span 1;
    width: 100%;
    display: flex;
    gap: 0 1rem;

    @media (max-width: 1060px) {
        // display: flex;
        flex-direction: column;
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

`;
export const FooterButtonContent=styled.div`
    grid-row: 4;
    grid-column: span 1;
    width: 100%;
    display: flex;
    gap: 0;

    button {
        margin-top: 0;
        margin-right: 24px
    }
;

@media (max-width: 1060px) {
    // display: flex;
    flex-direction: column;
}
`;

export const Subtitle=styled.p` 
    width:100%;
    margin-bottom:10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color:rgba(81, 82, 85, 1);
    line-height: 12px;
    letter-spacing: 0.15px;
`;

export const TextArea = styled.div`
    position: relative;
    padding-top: 13px;
    width: 100%;
`

export const Content=styled.div`
    width: 100%;
    background-colog:red;

    h3 {
        margin-bottom: 8px;
    };

    form {

        padding-top: 0;
        grid-column: span 2;
        width: 100%;
        font-size: 14px;
    ;

    
`;

export const Image=styled.div`
    width: 389px;
    height: 304px;
    background-color:red;

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
    }

    &.card-with-project {
            background-image: url(${(props)=>props.$imageProject
        });
        background-image: url(https://media.istockphoto.com/id/1193323373/vector/a-colorful-trendy-card-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=iIqY56kV1nKpfKCceag5NFWBnogRv8ZmJCFiicZxlpU=);
        background-size: cover;

        img {
            border-radius: 4px;
        };

        @media (max-width: $ {
                laptop
            }) {
            footer {
                margin-top: 200px;
            };
        };

        @media (max-width: $ {
                tablet
            }) {
            footer {
                margin-top: 258px;
            };
        };

        @media (max-width: $ {
                mobile

            }) {
            header div {
                margin: 0 93%;
            };

            footer {
                margin-top: 300px;
            };
        };

        @media (max-width: $ {
                "542px"
            }) {
            header div {
                margin: 0 88%;
            };
        };

        @media (max-width: $ {
                "375px"
            }) {
            footer {
                margin-top: 220px;
            };
        };

        @media (max-width: $ {
                "320px"
            }) {
            footer {
                margin-top: 200px;
            };
        };
    };

    &.card-without-project:hover,
    &.card-with-project:hover {
        cursor: pointer;
        transform: translate(-3px, -6px);
    };

    &.card-with-project:hover {
        header>div:only-child {
            opacity: 1;
        };
    };
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