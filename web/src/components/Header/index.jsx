import polygon from "../../assets/icons/polygon.svg";
import "./index.css";
export const Header = () => {
  return (
    <header>
      <nav>menu</nav>
      <div className="logo-tipo">
        <img src={polygon} alt="logo food explorer" />
        <h1>Food Page</h1>
      </div>
      <div>pedido</div>
    </header>
  );
};
