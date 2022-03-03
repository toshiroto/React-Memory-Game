const Card = (props) => {
  return (
    React.createElement("div", {}, [
      React.createElement("img", {}, props.frontfase),
      React.createElement("img", {}, props.backfase),
    ]));
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Memory Game!"),
        React.createElement(Card, {
          frontface: "../img/Chase",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Chase",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Everest",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Everest",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Marshal",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Marshal",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Rocky",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Rocky",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Rubble",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Rubble",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Skye",
          backface: "../img/PAW_Patrol"
        }),
        React.createElement(Card, {
          frontface: "../img/Skye",
          backface: "../img/PAW_Patrol"
        })
      ]);
  };

  ReactDOM.render(React.createElement(App), document.getElementById("root"));
