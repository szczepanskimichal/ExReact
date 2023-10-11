import "./App.css";
import React, { useState } from "react";

function App() {
  const [names] = useState([
    "John",
    "Mija",
    "Alice",
    "Bob",
    "Charlie",
    "Dylan",
  ]);
  const [name, setName] = useState("John");

  const handleChangeName = () => {
    // Losowe wybranie imienia z tablicy
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    setName(randomName);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default App;
