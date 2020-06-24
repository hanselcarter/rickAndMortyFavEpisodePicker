interface IImage {
  medium: string;
  original: string;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: IImage;
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export type Dispatch = React.Dispatch<IAction>;
