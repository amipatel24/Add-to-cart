import React from "react";
import Main from "./Components/Main";
import "./App.css";
import Basket from "./Components/Basket";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Main />
        <Basket />
      </div>
    </div>
  );
}

export default App;
