import React from "react";
import Heading from "./Heading";
import SearchEngine from "./SearchEngine";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <SearchEngine />
      </div>
    </div>
  );
}
