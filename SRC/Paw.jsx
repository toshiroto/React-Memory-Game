

const Paw = (props) => {


  const open = () => {
    props.click(true);

  };

  return (
    <div className="memory-card">
      <button onClick={open}>Hola</button>
      <img className="front-face" src={props.img} alt="Paw_img" />
      <img className="back-face" src={props.logo} alt="Paw_logo" />
    </div>
  );
};

export default Paw;
