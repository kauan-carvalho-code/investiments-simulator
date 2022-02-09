import styled from "styled-components";

export const Container = styled.div`
  width: 58%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.div`
  margin-bottom: 1.6rem;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;
  margin-bottom: 1.6rem;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 1.6rem;
    column-gap: 20px;
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
    width: 87.5%;
  }
`;

export const GraphicContainer = styled.div`
  @media only screen and (max-width: 768px) {
    width: 95%;
  }

  @media only screen and (max-width: 540px) {
    width: 87.5%;
  }
`;
