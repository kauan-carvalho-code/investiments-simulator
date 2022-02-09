import styled from "styled-components";

export const Container = styled.form`
  width: 480px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  margin-left: 14px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  margin-bottom: 3rem;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 45%;
  background-color: transparent;
  padding: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  @media only screen and (max-width: 540px) {
    width: 37.5%;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &.simulate {
    background-color: ${(props) => props.theme.colors.orange600};
    border: 0;
  }
`;
