import { Dispatch, SetStateAction } from "react";
import { InputContent, Label, Title } from "./styles";

interface InputProps {
  title: string;
  placeholder?: string;
  value: number;
  onChange?: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

export default function Input({
  title,
  placeholder = "",
  value,
  onChange,
  disabled,
}: InputProps) {
  return (
    <Label>
      <Title>{title}</Title>
      <InputContent
        type="number"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(+e.currentTarget.value)}
      />
    </Label>
  );
}
