import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import MainComponent from './components/MainComponent.jsx';
import appData from './alldata/data.json';

function App() {
  return (
    <Router>
      <Header name={appData.appName} navLinks={appData.navigation}></Header>
      <Route path="/" exact>
        <MainComponent quantities={appData.quantities}></MainComponent>
      </Route>
    </Router> 
  );
}

export default App;
