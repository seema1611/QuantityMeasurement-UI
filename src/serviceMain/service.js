import React from 'react';
import axios from "axios";

// var url = "http://localhost:8085/units";

class Converter extends React.Component{
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

export default Converter;