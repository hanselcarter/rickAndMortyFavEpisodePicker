import React from "react";

interface IState {
  episodes: [];
  favourites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initIalState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState | any>(initIalState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initIalState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
