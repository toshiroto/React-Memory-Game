import { render } from "react-dom";
import characters from "./characters";
import Paw from "./Paw";

const App = () => {
  return (
    <div className="memory-game">
      <h1>Paw Patrol Memory Game</h1>
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

render(<App />, document.getElementById("root"));
