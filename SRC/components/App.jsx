
import { render } from "react-dom";
import characters from "../characters";
import Paw from "./Paw";

const createCard = (character) => {
  return (
  <Paw
    id={character.id}
    key={character.id}
    name={character.name}
    img={character.imgUrl}
  />
  );
};

const App = () => {
  return (
    <div className="memory-game">
        <h1>Paw Patrol Memory Game</h1>
        {characters.map(createCard)}
    </div>
  );
}

 render(<App />, document.getElementById("root"));
