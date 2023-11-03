import React, {useEffect, useState} from 'react'
import CardPrincipal from './CardPrincipal'
import {Button, ButtonGroup } from 'react-bootstrap';
import ApiPokemon from '../PaginaPokemon/ApiPokemon'

const Api = () => {
  const [data, setData] = useState([])
  const [previousUrl, setPreviousUrl] = useState(1);
  const [nextUrl, setNextUrl] = useState(null);
  const [mostrarDetalle, setMostrarDetalle] = useState(false); // Estado para controlar la visibilidad del componente adicional
  const [selectedPokemonId, setSelectedPokemonId] = useState(null); // Estado para el ID del Pokémon seleccionado


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((result) => result.json())
      .then((data) => {
        setData(data.results);
        setPreviousUrl(data.previous);
        setNextUrl(data.next);
      });
  }, []);

  const fetchPokemonData = (url) => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setData(data.results);
        setPreviousUrl(data.previous);
        setNextUrl(data.next);
      });
  };

  const mostrarDetallePokemon = (id) => {
    setSelectedPokemonId(id);
    setMostrarDetalle(true);
  };

  const mostrarApi = () => {
    setMostrarDetalle(false);
  };


  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    {mostrarDetalle ? (
      <ApiPokemon mostrarApi={mostrarApi} selectedPokemonId={selectedPokemonId}/> // Muestra el componente adicional si mostrarDetalle es verdadero
    ) : (
      <>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {data.map((pokemon, i) => {
          return <CardPrincipal key={i} title={pokemon.name} url={pokemon.url} onClick={mostrarDetallePokemon} />;
        })}
      </div>

      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ButtonGroup style={{ width: '30%' }}>
          <Button variant="secondary" size="lg" onClick={() => fetchPokemonData(previousUrl)}>Anterior</Button>
          <Button variant="secondary" size="lg" onClick={() => fetchPokemonData(nextUrl)}>Siguiente</Button>
        </ButtonGroup>
      </div>
        </>
    )}
  </div>
  );
};

export default Api

