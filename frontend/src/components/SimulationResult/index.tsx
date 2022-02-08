import Card from "../Card";
import Graphic from "../Graphic";
import {
  CardsContainer,
  Container,
  Content,
  GraphicContainer,
  Header,
} from "./styles";

export default function SimulationResult() {
  return (
    <Container>
      <Header>
        <h2>Resultado da Simulação</h2>
      </Header>
      <Content>
        <CardsContainer>
          <Card title="Valor final bruto" value={15000} formatted />
          <Card title="Alíquota do IR" value={20} />
          <Card title="Valor pago em IR" value={1500} formatted />
          <Card title="Valor final líquido" value={56000} formatted />
          <Card title="Valor total investido" value={9500} formatted />
          <Card title="Ganho líquido" value={47000} formatted />
        </CardsContainer>
        <GraphicContainer>
          <Graphic />
        </GraphicContainer>
      </Content>
    </Container>
  );
}
