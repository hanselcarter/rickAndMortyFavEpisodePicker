import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./Store";
import HomePage from "./components/HomePage";
import FavePage from "./components/FavePage";
import { Router, RouteComponentProps } from "@reach/router";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
const root = document.getElementById("app-root");

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavePage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  root
);
