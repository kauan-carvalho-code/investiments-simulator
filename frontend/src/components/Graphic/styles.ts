import styled from "styled-components";

interface GraphicBarProps {
  withoutContributionHeight?: number;
  withContributionHeight?: number;
}

export const Container = styled.div`
  position: relative;

  &::before {
    content: "Valor (R$)";
    position: absolute;
    font-size: 14px;
    top: 7rem;
    left: -3rem;
    transform: rotate(270deg);
  }

  &::after {
    content: "Tempo (meses)";
    position: absolute;
    font-size: 14px;
    left: 40%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-self: flex-end;
  height: 17.2rem;

  transition: all 0.3s;
`;

export const GraphicBar = styled.div<GraphicBarProps>`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  width: 50px;
  margin-right: 1.4rem;

  span {
    min-height: 40px;
  }

  @media only screen and (max-width: 540px) {
    width: 100px;
    margin-right: 0.7rem;
  }

  .withContribution {
    background-color: ${(props) => props.theme.colors.orange600};
    margin-bottom: 0.2rem;
    height: ${(props) =>
      props.withContributionHeight && `${props.withContributionHeight}rem`};
  }

  .withoutContribution {
    background-color: #000000;
    height: ${(props) =>
      props.withoutContributionHeight &&
      `${props.withoutContributionHeight}rem`};
  }
`;
