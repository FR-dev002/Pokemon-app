import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { createAction } from '../utils/createAction';

const usePokemon = () => {
    
// ! Load semua data pokemon, karean parameter limit dan skip tidak di sediakan oleh APIs nya
const { loading, error, data } = useQuery(GET_POKEMONS, {
  variables: { first: 151 },
});

const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_POKEMON':
          return {
            ...state,
            pokemons: [...action.payload],
          };
        default:
          return state;
      }
    },
    {
      pokemons: []
    });


    React.useEffect(() => {
      if(!loading) {
        dispatch(createAction('SET_POKEMON', data.pokemons))
      }
    }, [loading, data]) 

    return {state}
}

export default usePokemon