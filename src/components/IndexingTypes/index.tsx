import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSimulator } from "../../hooks/useSimulator";
import CurrencyInputText from "../CurrencyInput";
import IndexingTypesSelector from "../IndexingTypesSelector";
import InputText from "../Input";
import { Container, Content, Header } from "./styles";

export default function IndexingTypes() {
  const {
    monthlyContribution,
    setMonthlyContribution,
    profitability,
    setProfitability,
    cdiValue,
    setCdiValue,
  } = useSimulator();

  return (
    <Container>
      <Header>
        <p>Tipos de indexação</p>
        <IoIosInformationCircleOutline />
      </Header>
      <Content>
        <IndexingTypesSelector />
        <CurrencyInputText
          title="Aporte Mensal"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
        />
        <InputText
          title="Rentabilidade"
          value={profitability}
          onChange={setProfitability}
        />
        <InputText
          title="CDI (ao ano)"
          value={cdiValue}
          onChange={setCdiValue}
          disabled
        />
      </Content>
    </Container>
  );
}
