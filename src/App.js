import React from "react";
import Header from "./components/Header";
import "./css/styles.scss";
import Main from "./components/MainComponent";

function App() {
  var message = ["from", "to"];
  var unit = [
    {
      measurementType: "Length",
      units: ["Metre", "Inch", "Foot"],
    },
    {
      measurementType: "Temperature",
      units: ["Kelvin", "Celcius", "Fahrenheit"],
    },
    {
      measurementType: "Volume",
      units: ["Litre", "Millilitre", "Gallon"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <Main unit={unit} message={message} />
    </div>
  );
}

export default App;
