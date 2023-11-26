import "./index.css";
export function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <div className="left-gradient"></div>
      {props.children}
      <div className="right-gradient"></div>
    </section>
  );
}
