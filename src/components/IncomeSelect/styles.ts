import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 50%;
  padding: 1rem 1rem;
  border: 1px solid black;

  svg {
    display: none;
  }

  &.isActive {
    background-color: ${(props) => props.theme.colors.orange600};
    color: #ffffff;

    svg {
      display: initial;
    }
  }

  &.left {
    border-radius: 8px 0 0 8px;
  }

  &.right {
    border-radius: 0 8px 8px 0;
  }
`;
