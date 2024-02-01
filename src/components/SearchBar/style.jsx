import { styled } from "styled-components";

export const SearchBarSC = styled.div`
  min-height: 2.5rem;
  max-width: 518px;
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  padding: 0.5rem;

  &:hover { cursor: text; }


  }
`;

export const UlTags = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap; 

  .tag-li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.25rem;
    background-color: #9747FF;
    color: white;
    border-radius: 10px;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      background-color: #111133;
    }
  }

  .placeholder {
    font-size: 1rem;
    padding: 0.25rem;
    color: #888;
  }
`

export const ClearTag = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.25rem;

  &:hover {
    cursor: pointer;
  }
`
