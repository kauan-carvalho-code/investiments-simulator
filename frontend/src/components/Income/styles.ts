import styled from "styled-components";

export const Container = styled.div`
  width: 45%;

  @media only screen and (max-width: 540px) {
    width: 40%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.4rem 0 1rem 0;

  svg {
    font-size: 1.3rem;
  }
`;

export const Content = styled.div``;
