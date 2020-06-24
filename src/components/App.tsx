import React from "react";
import { Store } from "../Store";

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);
  console.log(state.episodes);
  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJson._embedded.episodes,
    });
  };
  return (
    <>
      <h1>Rick and Morty</h1>
    </>
  );
}
