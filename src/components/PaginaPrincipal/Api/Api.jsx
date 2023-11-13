import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import ApiPokemon from '../../PaginaPokemon/ApiPokemon/ApiPokemon';
import CardPrincipal from '../CardPrincipal/CardPrincipal';
import Footer from '../../Footer/Footer';
import './Api.css';


const Api = () => {
  const [data, setData] = useState([])
  const [previousUrl, setPreviousUrl] = useState(1);
  const [nextUrl, setNextUrl] = useState(null);
  const [mostrarDetalle, setMostrarDetalle] = useState(false); // Estado para controlar la visibilidad del componente adicional
  const [selectedPokemonId, setSelectedPokemonId] = useState(null); // Estado para el ID del Pokémon seleccionado
  const [verFooter, setVerFooter] = useState(false);


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
    <div id='contenedorApi'>
    {mostrarDetalle ? (
      <ApiPokemon mostrarApi={mostrarApi} selectedPokemonId={selectedPokemonId}/> // Muestra el componente adicional si mostrarDetalle es verdadero
    ) : (
      <>
      <h1 id='titulo'>Pokedex</h1>
      <div id='contenedorCards'>
        {data.map((pokemon, i) => {
          return <CardPrincipal key={i} title={pokemon.name} url={pokemon.url} onClick={mostrarDetallePokemon} 
          />;
        })}
      </div>

        <ButtonGroup  id='botones'>
          <Button variant="secondary" size="lg" onClick={() => fetchPokemonData(previousUrl)}>Anterior</Button>
          <Button variant="secondary" size="lg" onClick={() => fetchPokemonData(nextUrl)}>Siguiente</Button>
        </ButtonGroup>
      </>
    )}

    { verFooter ? (
      <>
      <Footer/>
      <Button className='boton' variant="secondary" size="lg" onClick={() => { setVerFooter(false) }}>Ocultar</Button>
      </>) : 
      (<Button className='boton' variant="secondary" size="lg" onClick={() => {setVerFooter(true)}}>Desarrolladores</Button>)
    }
  </div>
  );
};

export default Api


