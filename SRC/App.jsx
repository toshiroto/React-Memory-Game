
import { render } from "react-dom";
import Card from "./Card";
import characters from "./characters";

const createCard = (character) => {
  return (
  <Card
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
