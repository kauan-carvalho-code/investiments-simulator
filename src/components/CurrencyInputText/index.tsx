import { useState } from "react";
import { Input, Label, Title } from "./styles";

interface CurrencyInputTextProps {
  title: string;
  placeholder?: string;
}

export default function CurrencyInputText({
  title,
  placeholder = "",
}: CurrencyInputTextProps) {
  const [value, setValue] = useState(0);

  return (
    <Label>
      <Title>{title}</Title>
      <span>
        R$
        <Input
          type="number"
          placeholder={placeholder}
          onChange={(e) => setValue(+e.currentTarget.value)}
          defaultValue={0}
        />
      </span>
    </Label>
  );
}
