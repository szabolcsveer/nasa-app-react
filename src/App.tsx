import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Apod from "./components/apod/Apod";


function App() {
  return (
    <div className="App">
      <Header />
      <Apod />
    </div>
  );
}

export default App;
