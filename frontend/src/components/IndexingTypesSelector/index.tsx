import { AiOutlineCheck } from "react-icons/ai";
import { useSimulator } from "../../hooks/useSimulator";
import { Container, Option } from "./styles";

export default function IndexingTypesSelector() {
  const { indexingType, setIndexingType } = useSimulator();

  return (
    <Container>
      <Option
        className={`left ${indexingType === "pre" ? "isActive" : ""}`}
        onClick={() => setIndexingType("pre")}
      >
        <AiOutlineCheck />
        <p>PRÉ</p>
      </Option>
      <Option
        className={indexingType === "pos" ? "isActive" : ""}
        onClick={() => setIndexingType("pos")}
      >
        <AiOutlineCheck />
        <p>POS</p>
      </Option>
      <Option
        className={`right ${indexingType === "ipca" ? "isActive" : ""}`}
        onClick={() => setIndexingType("ipca")}
      >
        <AiOutlineCheck />
        <p>FIXADO</p>
      </Option>
    </Container>
  );
}
