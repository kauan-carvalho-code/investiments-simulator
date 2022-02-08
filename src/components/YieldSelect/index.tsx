import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Container, Option } from "./styles";

export default function YieldSelect() {
  const [selected, setSelected] = useState("gross");

  return (
    <Container>
      <Option
        className={`left ${selected === "gross" ? "isActive" : ""}`}
        onClick={() => setSelected("gross")}
      >
        <AiOutlineCheck />
        <p>Bruto</p>
      </Option>
      <Option
        className={`right ${selected === "liquid" ? "isActive" : ""}`}
        onClick={() => setSelected("liquid")}
      >
        <AiOutlineCheck />
        <p>Líquido</p>
      </Option>
    </Container>
  );
}
