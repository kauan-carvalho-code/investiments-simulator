import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  border-bottom: 2px solid black;
  padding: 0.7rem 0;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Title = styled.p`
  padding: 3.4rem 0 1.4rem 0;
`;

export const InputContent = styled.input`
  outline: 0;
  border: 0;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
  margin-left: 0.2rem;
`;
