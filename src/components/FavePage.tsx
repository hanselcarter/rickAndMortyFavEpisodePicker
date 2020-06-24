import React from "react";
import { Store } from "../Store";
import { fetchDataAction, toggleFaveEpisode } from "../actions/actions";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function FavePage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, []);

  return (
    <>
      <React.Suspense fallback={<div>...loading</div>}>
        <EpisodesList
          episodes={state.favourites}
          favourites={state.favourites}
          toggleFaveEpisode={toggleFaveEpisode}
          dispatch={dispatch}
          state={state}
        />
      </React.Suspense>
    </>
  );
}
