import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeMain from "./Components/HomeMain";
import About from "./Components/About";
import "./index.css";
function App() {
  return (
    <div className="app">
      <HomeMain />
      <About />
    </div>
  );
}

export default App;
