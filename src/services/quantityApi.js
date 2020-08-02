import React from "react";
import axios from "axios";

class Api extends React.Component {
  convert = (fromUnit, quantity, toUnit) => {
    return axios({
      method: "post",
      url: "http://localhost:8085/units/convert",
      data: {
        valueOfInitialUnit: quantity,
        baseUnit: fromUnit,
        targetUnit: toUnit,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  loadUnit = (units) => {
    return axios({
      method: "get",
      url: "http://localhost:8085/units/subunits/" + units,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  loadMainUnit = () => {
    return axios({
      method: "get",
      url: "http://localhost:8085/units/mainunits",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default Api;
