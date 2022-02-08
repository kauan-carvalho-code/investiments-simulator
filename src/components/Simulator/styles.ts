import styled from "styled-components";

export const Container = styled.div`
  width: 520px;
`;

export const Header = styled.div`
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 3rem;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 46%;
  background-color: transparent;
  padding: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
  }

  &.simulate {
    background-color: ${(props) => props.theme.colors.orange600};
    border: 0;
  }
`;
