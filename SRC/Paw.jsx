import { useState } from "react";


function Paw(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(prevState => {
      return !prevState;
    });
  }

  function handleKeyDown() {
    setIsFlipped(prevState => {
      return !prevState;
    });
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      isflipped={isFlipped ? "front-face" : "back-face"}
      className="memory-card"
    >
      <img className="front-face" src={props.pic} alt="Paw_img" />
      <img className="back-face" src={props.logo} alt="Paw_logo" />
    </div>
  );
}

export default Paw;
