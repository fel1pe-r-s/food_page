import principal from "../../assets/principal.png";
import prato1 from "../../assets/pratos/Mask group-1.png";
import prato2 from "../../assets/pratos/Mask group-2.png";
import prato3 from "../../assets/pratos/Mask group-3.png";
import prato4 from "../../assets/pratos/Mask group-4.png";
import prato5 from "../../assets/pratos/Mask group-5.png";
import prato6 from "../../assets/pratos/Mask group-6.png";
import prato7 from "../../assets/pratos/Mask group-7.png";
import prato8 from "../../assets/pratos/Mask group-8.png";
import prato9 from "../../assets/pratos/Mask group-9.png";
import prato10 from "../../assets/pratos/Mask group-10.png";
import prato11 from "../../assets/pratos/Mask group-11.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Slide } from "../../components/Slide";

import "./index.css";
import { Card } from "../../components/Card";

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
        <Section title="Refeições">
          <Slide>
            <Card name={"Salada Ravanello"} img={prato1} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato2} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato3} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato4} current={49.97} />
          </Slide>
        </Section>
        <Section title="Sobremesas">
          <Slide>
            <Card name={"Salada Ravanello"} img={prato5} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato6} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato7} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato8} current={49.97} />
          </Slide>
        </Section>
        <Section title="Bebidas">
          <Slide>
            <Card name={"Salada Ravanello"} img={prato9} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato10} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato11} current={49.97} />
            <Card name={"Salada Ravanello"} img={prato11} current={49.97} />
          </Slide>
        </Section>
      </main>

      <footer className="footer">final</footer>
    </div>
  );
};
