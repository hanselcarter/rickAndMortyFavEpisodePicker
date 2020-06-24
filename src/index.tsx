import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./Store";

// export default function App(): JSX.Element {
//   return (
//     <>
//       <h1>Rick and Morty</h1>
//     </>
//   );
// }

const root = document.getElementById("app-root");

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  root
);
