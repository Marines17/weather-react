import React from "react";
import SearchEngine from "./SearchEngine";
import GitHub from "./GitHub";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <section>
          <div id="forecast"></div>
          <br />
        </section>
      </div>
      <GitHub />
    </div>
  );
}
