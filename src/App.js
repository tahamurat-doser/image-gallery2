import React from "react";

import data from "./data";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>ALBUMS</h1>
      <div className="pictures">
        {data.map((item, index) => (
          <div className="picture" key={index}>
            <div className="imageContainer">
              <img src={item.src.large} alt=""></img>
            </div>
            <div className="info">
              <span>{item.photographer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
