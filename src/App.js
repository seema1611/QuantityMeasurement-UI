import React, { Component } from "react";
import Header from "./components/Header";
import "./css/styles.scss";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    var unit = [
      {
        measurementType: "Length",
        units: ["Metre", "Inch", "Feet","Millimetre"],
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
        <Main unit={unit} />
      </div>
    );
  }
}

export default App;
