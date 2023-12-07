import { Container } from "./style";
export default function Input({ typeInput, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={typeInput}>{label}</label>
      <input {...rest} />
    </Container>
  );
}
