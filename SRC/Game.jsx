import { useState } from "react";
import characters from "./characters";
import Paw from "./Paw";

function Game () {
  const [flip, setFlip] = useState("");

  const open = () => {
    setFlip(flip=== true)
  };

  return (
  <div className="memory-game">
    {characters.map((character) => (
      <Paw
        key={character.id}
        name={character.name}
        img={character.pic}
        onClick={open}
      />
    ))}
  </div>
  );
};

export default Game;
