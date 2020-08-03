import React from "react";

class historyContent extends React.Component {

  history = [
    {
      baseunit: "Length",
      from: "Feet",
      to: "Inch",
      value: 1,
      result: 3,
    },
    {
      baseunit: "Length",
      from: "Feet",
      to: "Inch",
      value: 1,
      result: 3,
    },
    {
      baseunit: "Length",
      from: "Feet",
      to: "Inch",
      value: 1,
      result: 3,
    },
  ];

  render() {
    return (
      <div>
        <th>BASE-UNIT</th>
        <th>TARGET-UNIT</th>
        <th>INPUT-VALUE</th>
        <th>CONVERSION-OUTPUT</th>
        {this.props.data.map((data) => (
          <div>
            <td>{data.fromUnit}</td>
            <td>{data.toUnit}</td>
            <td>{data.quantity}</td>
            <td>{data.result}</td>
          </div>
        ))}
      </div>
    );
  }
}

export default historyContent;
