import React, { useState } from "react";
import { InfinitScrollContext, MyProvider } from "../context/infiniteScroll";
import usePokemon from "../reducers/usePokemon";
import { Container, Row } from "react-bootstrap";
import PokemonCardListComponent from "../components/pokemonCardList";
import SearchPokemonComponent from "./../components/searchPokemon";

const PokemonList = ({ history, ...props }) => {
  const { state } = usePokemon();
  const { data, loading, more, load } = React.useContext(InfinitScrollContext);
  const loader = React.useRef(load);
  const [search, setSetSearch] = useState("");


  // Karena parameter like tidak ada di API yang di sediakan, 
  // jadi untuk filter langsung filter dari front_end
  // yang mana smua data pokemons sudah di load di awal
  const onSubmit = () => {
    const dataPokemon = Object.assign({}, state);
    const result = {};
     result.pokemons = dataPokemon.pokemons.filter((data) => {
      const str = search.split(' ')
      .map(world => world[0].toUpperCase() + world.substr(1).toLowerCase())
      .join(' ')
      if(data.name.indexOf(str) > -1) {
        return data;
      }
    })
    load(result, true);
  }

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );

  const [element, setElement] = React.useState(null);

  React.useEffect(() => {
    loader.current = () => load(state);
  }, [load, state]);

  React.useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <>
      {/* Component serach Pokemon */}
      <SearchPokemonComponent
        onChange={({ target }) => setSetSearch(target.value)}
        onSubmit={onSubmit}
      />
      {data.map((row) => (
        <PokemonCardListComponent
          key={row.number}
          row={row}
          history={history}
        />
      ))}

      {loading && <li>Loading...</li>}

      {!loading && more && (
        <li ref={setElement} style={{ background: "transparent" }}></li>
      )}
    </>
  );
};

export default (props) => {
  return (
    <Container>
      <MyProvider>
        <PokemonList {...props} />
      </MyProvider>
    </Container>
  );
};
