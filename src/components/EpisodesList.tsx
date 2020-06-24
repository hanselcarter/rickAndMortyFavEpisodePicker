import React from "react";

import { IEpisode } from "../interfaces/interfaces";

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFaveEpisode, favourites, dispatch, state } = props;
  return (
    <>
      <section>
        {episodes.map(
          (episode: IEpisode): JSX.Element => {
            return (
              <section key={episode.id}>
                <img
                  src={episode.image.medium}
                  alt={`Rick and Morty ${episode.name}`}
                />
                <div>{episode.name}</div>
                <section>
                  <div>
                    {" "}
                    season: {episode.season} number: {episode.number}
                  </div>{" "}
                  <button
                    type="button"
                    onClick={() => toggleFaveEpisode(state, dispatch, episode)}
                  >
                    {favourites.find((fav: IEpisode) => fav.id === episode.id)
                      ? "Unfav"
                      : "fav"}
                  </button>
                </section>
              </section>
            );
          }
        )}
      </section>
    </>
  );
}
