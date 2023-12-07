import { Container, Logo, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

import logo from "../../assets/icons/logo.svg";
export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo food page" />
      </Logo>
      <Content>
        <h2>Faça login</h2>
        <form>
          <Input
            typeInput="email"
            label="Email"
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            typeInput="password"
            label="Senha"
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
          <Button title="Entrar" />
        </form>
        <ButtonText to="/register" title="Criar uma conta" />
      </Content>
    </Container>
  );
}
