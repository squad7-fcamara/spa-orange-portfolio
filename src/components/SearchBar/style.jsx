import { styled } from "styled-components";

export const SearchBarSC = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2;
  padding-bottom: .8rem;

  label {
    width: 100%;
    color: rgba(11, 12, 13, 1);
    opacity: 0.6;
  }
  input {
    max-width: 51.8rem;
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);

    ::placeholder {
      font-size: 1.6rem;
      color: rgba(129, 131, 136, 1);
    }
  }
`;
