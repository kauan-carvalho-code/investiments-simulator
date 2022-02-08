import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Container, Option } from "./styles";

export default function IndexingTypesSelector() {
  const [selected, setSelected] = useState("PRÉ");

  return (
    <Container>
      <Option
        className={`left ${selected === "PRÉ" ? "isActive" : ""}`}
        onClick={() => setSelected("PRÉ")}
      >
        <AiOutlineCheck />
        <p>PRÉ</p>
      </Option>
      <Option
        className={selected === "POS" ? "isActive" : ""}
        onClick={() => setSelected("POS")}
      >
        <AiOutlineCheck />
        <p>POS</p>
      </Option>
      <Option
        className={`right ${selected === "fixed" ? "isActive" : ""}`}
        onClick={() => setSelected("fixed")}
      >
        <AiOutlineCheck />
        <p>FIXADO</p>
      </Option>
    </Container>
  );
}
