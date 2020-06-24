import { IEpisode, IAction, IState } from "../interfaces/interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJson = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJson._embedded.episodes,
  });
};

export const toggleFaveEpisode = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favourites.includes(episode);
  let dispatchObject = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (episodeInFav) {
    const favsWithOutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );

    dispatchObject = {
      type: "REMOVE_FAV",
      payload: favsWithOutEpisode,
    };
  }
  return dispatch(dispatchObject);
};
