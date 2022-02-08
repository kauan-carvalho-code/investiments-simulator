import styled from "styled-components";

export const Label = styled.label`
  width: 100%;

  span {
    display: flex;
    border-bottom: 2px solid black;
    padding: 0.7rem 0;
    font-size: 14px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Title = styled.p`
  padding: 3.4rem 0 1.4rem 0;
`;

export const Input = styled.input`
  outline: 0;
  border: 0;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
  margin-left: 0.2rem;
`;
