import IndexingTypes from "../IndexingTypes";
import Yield from "../Yield";
import { Button, ButtonsContainer, Container, Content, Header } from "./styles";

export default function Simulator() {
  return (
    <Container>
      <Header>
        <h2>Simulador</h2>
      </Header>
      <Content>
        <Yield />
        <IndexingTypes />
      </Content>
      <ButtonsContainer>
        <Button>Limpar Campos</Button>
        <Button className="simulate">Simular</Button>
      </ButtonsContainer>
    </Container>
  );
}
