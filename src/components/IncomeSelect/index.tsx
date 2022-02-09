import { AiOutlineCheck } from "react-icons/ai";
import { useSimulator } from "../../hooks/useSimulator";
import { Container, Option } from "./styles";

export default function IncomeSelect() {
  const { incomeType, setIncomeType } = useSimulator();

  return (
    <Container>
      <Option
        className={`left ${incomeType === "bruto" ? "isActive" : ""}`}
        onClick={() => setIncomeType("bruto")}
      >
        <AiOutlineCheck />
        <p>Bruto</p>
      </Option>
      <Option
        className={`right ${incomeType === "liquido" ? "isActive" : ""}`}
        onClick={() => setIncomeType("liquido")}
      >
        <AiOutlineCheck />
        <p>Líquido</p>
      </Option>
    </Container>
  );
}
