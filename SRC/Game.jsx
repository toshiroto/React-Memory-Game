
import characters from "./characters";
import Paw from "./Paw";

function Game() {
  return (
    <div className="memory-game">
      {characters.map((character) => (
        <Paw
          key={character.key}
          name={character.name}
          pic={character.pic}
          logo={character.logo}


        />
      ))}
    </div>
  );
}

export default Game;
