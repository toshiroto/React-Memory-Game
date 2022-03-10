import { render } from "react-dom";
import Game from "./Game";

const App = () => {
  return (
    <Game />
  );
};

render(<App />, document.getElementById("root"));
