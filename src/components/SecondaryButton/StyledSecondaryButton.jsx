import styled from 'styled-components';

export const ButtonSecondary = styled.button`
color: rgba(0, 0, 0, 0.38);
background-color: var(--action-disabledBackground, rgba(0, 0, 0, 0.12));
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
width: 100%;
border: none;
border-radius: 5px;
padding: 1rem;

margin: 1.5rem auto;

font-size: 1rem;
font-style: normal;
font-weight: 500;

transition: 0.5s;

&:hover {
    transition: 0.5s;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.38)
}
`;