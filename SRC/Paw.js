const Paw = (props) => {
  return (
  <div>
    <img className="front-face" src={props.img} alt="Paw_img" />
    <img className="back-face" src={props.logo} alt="Paw_logo" />
  </div>
)
}

// const Card = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("img", {}, props.frontfase),
//     React.createElement("img", {}, props.backfase),
//   ]);
// };

export default Paw;
