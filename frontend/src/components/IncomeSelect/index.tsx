import { AiOutlineCheck } from "react-icons/ai";
import { useSimulator } from "../../hooks/useSimulator";
import { Container, Option } from "./styles";

export default function IncomeSelect() {
  const { incomeType, setIncomeType } = useSimulator();

  return (
    <Container>
      <Option
        className={`left ${incomeType === "gross" ? "isActive" : ""}`}
        onClick={() => setIncomeType("gross")}
      >
        <AiOutlineCheck />
        <p>Bruto</p>
      </Option>
      <Option
        className={`right ${incomeType === "liquid" ? "isActive" : ""}`}
        onClick={() => setIncomeType("liquid")}
      >
        <AiOutlineCheck />
        <p>Líquido</p>
      </Option>
    </Container>
  );
}
