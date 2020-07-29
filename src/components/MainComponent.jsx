import React, { Component } from 'react'
import Quantity from '../components/Quantity'
import UnitValues from '../components/UnitValues'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuantity: this.props.unit[0],
    };
    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(quantity) {
    this.setState({ currentQuantity: quantity });
  }

  render() {
    var quantity = this.props.unit.map((quantity) => (
      <Quantity
        quantity={quantity}
        setQuantity={this.setQuantity}
        isActive={
          this.state.currentQuantity.measurementType ===
          quantity.measurementType
        }
      />
    ));
    var unitValues = this.props.message.map((message) => (
      <UnitValues
        name={message}
        units={this.state.currentQuantity.units}
        setSelectedUnit={this.setSelectedUnit}
        selectedUnit={this.state.selectedUnit}
      />
    ));
    return (
      <div className="home">
        <div id="home-text">CHOOSE TYPE</div>
        <div id="quantity">{quantity}</div>
        <div id="converter">{unitValues}</div>
      </div>
    );
  }
}

export default MainComponent;