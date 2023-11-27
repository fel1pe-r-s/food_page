import { useState } from "react";

import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

import "./index.css";
export function Card({ name, img, current }) {
  const [counter, setCounter] = useState(1);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="card">
      <img src={img} alt={name} />
      <strong>{name}</strong>
      <span>R${current}</span>
      <div className="counter">
        <button onClick={handleClick2}>
          <img src={minus} alt="menos um prato" />
        </button>
        <p>{counter}</p>
        <button onClick={handleClick1}>
          <img src={plus} alt="mas um prato" />
        </button>
      </div>
      <button>incluir</button>
    </div>
  );
}
