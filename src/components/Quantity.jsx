import React, { Component } from "react";
import Converter from "../serviceMain/service.js";

class Quantity extends Component {

  constructor(props) {
    super(props);
    this.converter=new Converter();
  }

  componentWillMount(){
    this.loadUnits();
  }

  async loadUnits () {
    const units=await this.converter.loadMainUnit();
    console.log(units);
  }
  

  render() {
    return (
      <button
        id={
          this.props.isActive
            ? `${this.props.quantity.measurementType}-active`
            : this.props.quantity.measurementType
        }
        onClick={() => this.props.setQuantity(this.props.quantity)}
      >
        <div id="quantity-image"></div>
        <div id="quantity-name">{this.props.quantity.measurementType}</div>
      </button>
    );
  }
}

export default Quantity;
