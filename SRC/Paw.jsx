
import logo from "./img/Logo.png";

const Paw = (props) => {

  return (
    <div className="memory-card">
      <img className="front-face" src={props.img} alt="Paw_img" />
      <img className="back-face" src={logo} alt="Paw_logo" />
    </div>
  );
};

export default Paw;
