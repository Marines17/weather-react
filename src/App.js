import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
      </div>
      <section>
        <div id="forecast"></div>
        <br />
      </section>
    </div>
  );
}
