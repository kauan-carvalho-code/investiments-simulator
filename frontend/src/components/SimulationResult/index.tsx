import { useSimulator } from "../../hooks/useSimulator";
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
  const { simulation } = useSimulator();

  return (
    <Container>
      {simulation && (
        <>
          <Header>
            <h2>Resultado da Simulação</h2>
          </Header>
          <Content>
            <CardsContainer>
              <Card
                title="Valor final bruto"
                value={simulation[0].valorFinalBruto}
                formatted
              />
              <Card title="Alíquota do IR" value={simulation[0].aliquotaIR} />
              <Card
                title="Valor pago em IR"
                value={simulation[0].valorPagoIR}
                formatted
              />
              <Card
                title="Valor final líquido"
                value={simulation[0].valorFinalLiquido}
                formatted
              />
              <Card
                title="Valor total investido"
                value={simulation[0].valorTotalInvestido}
                formatted
              />
              <Card
                title="Ganho líquido"
                value={simulation[0].ganhoLiquido}
                formatted
              />
            </CardsContainer>
            <GraphicContainer>
              <Graphic />
            </GraphicContainer>
          </Content>
        </>
      )}
    </Container>
  );
}
