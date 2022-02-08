import { IoIosInformationCircleOutline } from "react-icons/io";
import CurrencyInputText from "../CurrencyInputText";
import InputText from "../InputText";
import YieldSelect from "../YieldSelect";
import { Container, Content, Header } from "./styles";

export default function Yield() {
  return (
    <Container>
      <Header>
        <p>Rendimento</p>
        <IoIosInformationCircleOutline />
      </Header>
      <Content>
        <YieldSelect />
        <CurrencyInputText title="Aporte Inicial" />
        <InputText title="Prazo (em meses)" />
        <InputText title="IPCA (ao ano)" />
      </Content>
    </Container>
  );
}
