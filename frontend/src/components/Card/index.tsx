import { Container, Title } from "./styles";

interface CardProps {
  title: string;
  value: number;
  formatted?: boolean;
}

export default function Card({ title, value, formatted }: CardProps) {
  const numberFormat = (numberToBeFormatted: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numberToBeFormatted);

  return (
    <Container>
      <Title>{title}</Title>
      <p>{formatted ? numberFormat(value) : `${value}%`}</p>
    </Container>
  );
}
