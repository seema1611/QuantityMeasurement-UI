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
        <th>FROM</th>
        <th>TO</th>
        <th>VALUE</th>
        <th>RESULT</th>
      </div>
    );
  }
}

export default historyContent;
