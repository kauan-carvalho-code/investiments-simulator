import { AiOutlineCheck } from "react-icons/ai";
import { useSimulator } from "../../hooks/useSimulator";
import { Container, Option } from "./styles";

export default function IndexingTypesSelector() {
  const { indexingType, setIndexingType } = useSimulator();

  return (
    <Container>
      <Option
        className={`left ${indexingType === "PRÉ" ? "isActive" : ""}`}
        onClick={() => setIndexingType("PRÉ")}
      >
        <AiOutlineCheck />
        <p>PRÉ</p>
      </Option>
      <Option
        className={indexingType === "POS" ? "isActive" : ""}
        onClick={() => setIndexingType("POS")}
      >
        <AiOutlineCheck />
        <p>POS</p>
      </Option>
      <Option
        className={`right ${indexingType === "fixed" ? "isActive" : ""}`}
        onClick={() => setIndexingType("fixed")}
      >
        <AiOutlineCheck />
        <p>FIXADO</p>
      </Option>
    </Container>
  );
}
