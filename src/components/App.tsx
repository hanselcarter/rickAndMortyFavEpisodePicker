import React from "react";
import { Store } from "../Store";

import { Link } from "@reach/router";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <header>
        <div>
          <h1>Rick and Morty</h1>
          <h4>pick you favorite episode</h4>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves"> Favourites(S): {state.favourites.length}</Link>
        </div>
        {props.children}
      </header>
    </>
  );
}
