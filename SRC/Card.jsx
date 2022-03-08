import Paw from "paw";

const Card = props => {
  return (
    <div className="memory-card">
        <Paw img={props.img} />
    </div>
  )
}

export default Card;
