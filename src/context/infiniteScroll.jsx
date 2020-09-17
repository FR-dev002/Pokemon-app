import React from "react";
import { createAction } from "../utils/createAction";
import useInfiniteScroll from "./../reducers/useInfiniteScrool";

const perPage = 10;
let InfinitScrollContext;
let { Provider } = (InfinitScrollContext = React.createContext({}));

const MyProvider = ({ children }) => {
  const { state, dispatch } = useInfiniteScroll(); 
  const { loading, data, after, more } = state;
  const load = (datas, search) => {
    dispatch(createAction("START", true));
    let newData = datas;
    setTimeout(() => {
      if(search) {
      dispatch(createAction("CLEAR_DATA", []));
        newData = datas.pokemons
      } else {
       newData = datas.pokemons.slice(after, after + perPage);
      }
      dispatch(createAction("LOADED", newData));
    }, 1000);

  };
  return <Provider value={{ loading, data, more, load }}>{children}</Provider>;
};

export { MyProvider, InfinitScrollContext}