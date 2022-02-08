import { IoIosInformationCircleOutline } from "react-icons/io";
import CurrencyInputText from "../CurrencyInputText";
import IndexingTypesSelector from "../IndexingTypesSelector";
import InputText from "../InputText";
import { Container, Content, Header } from "./styles";

export default function IndexingTypes() {
  return (
    <Container>
      <Header>
        <p>Tipos de indexação</p>
        <IoIosInformationCircleOutline />
      </Header>
      <Content>
        <IndexingTypesSelector />
        <CurrencyInputText title="Aporte Mensal" />
        <InputText title="Rentabilidade" />
        <InputText title="CDI (ao ano)" />
      </Content>
    </Container>
  );
}
