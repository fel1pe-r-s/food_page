import { Container, Logo, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

import logo from "../../assets/icons/logo.svg";
export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo food page" />
      </Logo>
      <Content>
        <h2>Crie sua Conta</h2>
        <form>
          <Input
            typeInput="name"
            label="Nome"
            id="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
          />
          <Input
            typeInput="email"
            label="Email"
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            typeInput="password"
            label="Senha"
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
          <Input
            typeInput="confirmPassword"
            label="Confirme a senha"
            id="confirmPassword"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
          <Button title="Criar Conta" />
        </form>
        <ButtonText to="/" title="Já tenho uma conta" />
      </Content>
    </Container>
  );
}
