import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.gray200};
  width: 220px;
  height: 80px;
  padding: 0.5rem;
  box-shadow: 0 0 5px 1px ${(props) => props.theme.colors.gray600};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: bold;
`;
