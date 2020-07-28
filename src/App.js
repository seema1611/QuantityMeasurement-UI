import React from "react";
import Header from "./components/Header";
import "./css/styles.scss";
import MainComponent from "./components/MainComponent";

function App() {
  var message = ["from", "to"];
  var unit = [
    {
      measurementType: "Length",
      units: ["Feet", "Inch", "Yard", "Kilometer", "Meter", "Centimeter", "Millimeter", "Micrometer", "Mile"],
    },
    {
      measurementType: "Temperature",
      units: ["Celsius", "Fahrenheit", "Kelvin"],
    },
    {
      measurementType: "Volume",
      units:  ["Litres", "Milliliters", "Gallons"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <MainComponent unit={unit} message={message} />
    </div>
  );
}

export default App;
