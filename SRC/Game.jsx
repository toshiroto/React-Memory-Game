import { useState } from "react"
import characters from "./characters";
import Paw from "./Paw";


function Game () {
  const [flip, setFlip] = useState(false);

  console.log(flip);

  return (
  <div className="memory-game">
    {characters.map(character => (
      <Paw
        key={character.key}
        name={character.name}
        img={character.pic}
        logo={character.logo}
        click={setFlip}

      />
    ))}
  </div>
  );
};

export default Game;
