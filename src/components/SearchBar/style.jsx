import { styled } from "styled-components";

export const SearchBarSC = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
  padding-bottom: 8px;

  label {
    width: 100%;
    color: rgba(11, 12, 13, 1);
    opacity: 0.6;
  }
  input {
    max-width: 518px;
    width: 100%;
    height: 56px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);

    ::placeholder {
      font-size: 16px;
      color: rgba(129, 131, 136, 1);
    }
  }
`;
