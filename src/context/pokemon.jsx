import React from "react";
import usePokemon from "../reducers/usePokemon";

let PokemonContext;
let { Provider } = (PokemonContext = React.createContext({}));

const  PokemonProvider= ({children}) => {
let { state } = usePokemon();
if(state.pokemons.length > 0) {
  return (
    <Provider value={{ state }} >
      {children}
    </Provider>
  );
} else {
  return null
}
};

export {PokemonContext,  PokemonProvider };