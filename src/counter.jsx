import "./App.css"; // Importujemy plik CSS
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0); // Deklarujemy zmienną stanu

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} // Exportujemy komponent App
export default Counter;
