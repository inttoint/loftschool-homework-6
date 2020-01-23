import React from "react";
import './App.css';
import Market from "../Market";
import Farm from "../Farm";
import Budget from '../Budget'

const App = () => {
  return (
    <div className="app">
      <Market />
      <Farm />
      <Budget />
    </div>
  );
};

export default App;