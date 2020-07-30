import React, { Component } from 'react'
import Quantity from '../components/Quantity'
import UnitValues from '../components/UnitValues'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuantity: this.props.unit[0],
      fromValue: 0,
      fromUnit: this.props.unit[0].units[0],
      toUnit: this.props.unit[0].units[1],
      toValue: 0,
    };
    this.setQuantity = this.setQuantity.bind(this);
    this.setFromValue = this.setFromValue.bind(this);
    this.setFromUnit = this.setFromUnit.bind(this);
    this.setToUnit = this.setToUnit.bind(this);
  }

  setQuantity(quantity) {
    this.setState(
      {
        currentQuantity: quantity,
        fromValue: 0,
        toValue: 0,
        fromUnit: quantity.units[0],
        toUnit: quantity.units[1],
      },

    );
  }

  setFromUnit(event) {
    this.setState({ fromUnit: event.target.value });
  }

  setToUnit(event) {
    this.setState({ toUnit: event.target.value });
  }

  setFromValue(event) {
    this.setState({ fromValue: event.target.value });
  }

  render() {
    var quantity = this.props.unit.map((quantity) => (
      <Quantity
        key={quantity.measurementType}
        quantity={quantity}
        setQuantity={this.setQuantity}
        isActive={
          this.state.currentQuantity.measurementType ===
          quantity.measurementType
        }
      />
    ));

    return (
      <div className="home">
        <div id="home-text">CHOOSE TYPE</div>
        <div id="quantity">{quantity}</div>
        <div id="converter">
          <UnitValues
            key="from"
            name="from"
            units={this.state.currentQuantity.units}
            setUnit={this.setFromUnit}
            setValue={this.setFromValue}
            setToValue={this.setToValue}
            value={this.state.fromValue}
            selectedUnit={this.state.toUnit}
          />

          <UnitValues
            key="to"
            name="to"
            units={this.state.currentQuantity.units}
            setUnit={this.setToUnit}
            setValue={this.setToValue}
            setToValue={this.setToValue}
            value={this.state.toValue}
            selectedUnit={this.state.fromUnit}
          />
        </div>
      </div>
    );
  }
}

export default MainComponent;