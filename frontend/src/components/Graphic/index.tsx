import { useSimulator } from "../../hooks/useSimulator";
import { Container, Content, GraphicBar } from "./styles";

export default function Graphic() {
  const { simulation } = useSimulator();

  const formatNumber = (valueToBeFormatted: number) =>
    Math.trunc(valueToBeFormatted) / 200;

  return (
    <Container>
      <p>Projeção de valores</p>
      <Content>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[0]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[0]
          )}
        >
          0
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[1]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[1]
          )}
        >
          1
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[2]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[2]
          )}
        >
          2
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[3]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[3]
          )}
        >
          3
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[4]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[4]
          )}
        >
          4
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[5]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[5]
          )}
        >
          5
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[6]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[6]
          )}
        >
          6
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[7]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[7]
          )}
        >
          7
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[8]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[8]
          )}
        >
          8
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[9]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[9]
          )}
        >
          9
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
        <GraphicBar
          withoutContributionHeight={formatNumber(
            simulation[0].graficoValores.semAporte[10]
          )}
          withContributionHeight={formatNumber(
            simulation[0].graficoValores.comAporte[10]
          )}
        >
          10
          <span className="withoutContribution" />
          <span className="withContribution" />
        </GraphicBar>
      </Content>
    </Container>
  );
}
