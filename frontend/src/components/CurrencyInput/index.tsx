import { Dispatch, SetStateAction } from "react";
import { Input, Label, Title } from "./styles";

interface CurrencyInputProps {
  title: string;
  placeholder?: string;
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
}

export default function CurrencyInput({
  title,
  placeholder = "",
  value,
  onChange,
}: CurrencyInputProps) {
  return (
    <Label>
      <Title>{title}</Title>
      <Input
        thousandSeparator
        placeholder={placeholder}
        prefix="R$ "
        value={value}
        onValueChange={(values) => onChange(values.value)}
        inputMode="numeric"
      />
    </Label>
  );
}
