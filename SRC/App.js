const Card = (props) => {
  return React.createElement("div", {}, [
    React.createElement("img", {}, props.frontfase),
    React.createElement("img", {}, props.backfase),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Memory Game!"),
    React.createElement(Card, {
      frontface: "Chase",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Chase",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Everest",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Everest",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Marshal",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Marshal",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Rocky",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Rocky",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Rubble",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Rubble",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Skye",
      backface: "PAW_Patrol",
    }),
    React.createElement(Card, {
      frontface: "Skye",
      backface: "PAW_Patrol",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
