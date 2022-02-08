import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSimulator } from "../../hooks/useSimulator";
import CurrencyInput from "../CurrencyInput";
import IncomeSelect from "../IncomeSelect";
import Input from "../Input";
import { Container, Content, Header } from "./styles";

export default function Income() {
  const {
    initialContribution,
    setInitialContribution,
    deadline,
    setDeadline,
    ipcaValue,
    setIpcaValue,
  } = useSimulator();

  return (
    <Container>
      <Header>
        <p>Rendimento</p>
        <IoIosInformationCircleOutline />
      </Header>
      <Content>
        <IncomeSelect />
        <CurrencyInput
          title="Aporte Inicial"
          value={initialContribution}
          onChange={setInitialContribution}
        />
        <Input
          title="Prazo (em meses)"
          value={deadline}
          onChange={setDeadline}
        />
        <Input
          title="IPCA (ao ano)"
          value={ipcaValue}
          onChange={setIpcaValue}
        />
      </Content>
    </Container>
  );
}
