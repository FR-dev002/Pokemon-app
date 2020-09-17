import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import { PokemonProvider } from "./context/pokemon";
// import {InfiniteScrollProvider} from './context/infiniteScroll';
import PokemonsContainer from "./containers/PokemonsContainer";
import PokemonContainer from "./containers/PokemonContainer";
import { Route } from "react-router";
import { Router } from "react-router-dom";
import history from "./utils/createHistory";
import NavbarComponent from "./layouts/navbar";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <Router history={history}>
      <NavbarComponent />
      <ApolloProvider client={client}>
        <PokemonProvider>
          <Route exact path="/" component={PokemonsContainer} />
          <Route path="/:pokemonId" component={PokemonContainer} />
        </PokemonProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
