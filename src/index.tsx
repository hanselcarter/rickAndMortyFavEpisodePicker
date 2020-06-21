import React from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  return (
    <>
      <h1>Rick and Morty</h1>
    </>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
