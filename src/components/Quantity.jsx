import React, { Component } from "react";
import Service from "../service/service.js";

class Quantity extends Component {

  constructor(props) {
    super(props);
    this.service=new Service();
    this.state={data: [], subunit: [], index: 0}
  }

  componentWillMount(){
    this.loadUnits();
  }

  async loadUnits() {
    const units = await this.service.loadMainUnit();
    // const subUnits = await this.service.loadSubUnit(units);
    const subUnits = await this.service.loadSubUnit("TEMPERATURE");
    this.setState({
      data: units,
      subunit: subUnits,
    })
    console.log(units);
    console.log(subUnits)
  }
  
  async loadSubUnits(id) {
    const val = await this.service.loadSubUnit(this.state.data[id]);
    this.setState({
      subunit: val,
    })
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
