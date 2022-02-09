import styled from "styled-components";

export const Main = styled.main`
  max-width: 1278px !important;
  margin: 0 auto;
  padding-bottom: 8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 540px) {
    font-size: 87.5% !important;
  }
`;

export const Header = styled.header`
  height: 6rem;
  max-width: 1278px !important;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 540px) {
    h1 {
      font-size: 24px;
    }
  }
`;
