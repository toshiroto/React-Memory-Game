import { useState } from "react";
import characters from "./characters";
import Paw from "./Paw";

function Game () {
  const [flip, setFlip] = useState([false])

  return (
  <div className="memory-game">
    {characters.map((character) => (
      <Paw
        id={character.id}
        key={character.id}
        name={character.name}
        img={character.imgUrl}
      />
    ))}
  </div>
  );
};

export default Game;