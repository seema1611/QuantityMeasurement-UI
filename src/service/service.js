import React from 'react';
import axios from "axios";

class Service extends React.Component{
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

      loadSubUnit = (units) => {
        return axios({
          method: "get",
          url: "http://localhost:8085/units/subunits/" + units,
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

export default Service;