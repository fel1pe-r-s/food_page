import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import principal from "../../assets/principal.png";
import "./index.css";

export const Home = () => {
  return (
    <div id="container">
      <Header />
      <aside>
        <div className="img-slog">
          <img src={principal} alt="logo food explorer" />
        </div>

        <div className="slog">
          <strong>Sabores inigualáveis</strong>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </aside>
      <main>
        <Section title="Refeições"></Section>
        <Section title="Sobremesas"></Section>
        <Section title="Bebidas"></Section>
      </main>

      <footer className="footer">final</footer>
    </div>
  );
};
