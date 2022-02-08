import { useState } from "react";
import { Input, Label, Title } from "./styles";

interface InputTextProps {
  title: string;
  placeholder?: string;
}

export default function InputText({ title, placeholder = "" }: InputTextProps) {
  const [value, setValue] = useState("");

  return (
    <Label>
      <Title>{title}</Title>

      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </Label>
  );
}
