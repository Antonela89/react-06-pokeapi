import React, { useEffect, useState } from 'react';
import CardPokemon from '../CardPokemon/CardPokemon';
import {Button, ButtonGroup } from 'react-bootstrap';
import './ApiPokemon.css';


function ApiPokemon({mostrarApi, selectedPokemonId}) {

  let [pokemonName, setPokemonName] = useState('')
  let [pokemonImg, setPokemonImg] = useState('')
  const [pokemonType, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonXP, setPokemonXP] = useState();
  // const [id, setId] = useState(1);
  const [id, setId] = useState(selectedPokemonId);
  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(result => result.json())
      .then(data => {
        setPokemonName(data.name);
        setPokemonImg(data.sprites.other.dream_world.front_default)
        const types = data.types.map((typeData) => typeData.type.name);
        setPokemonTypes(types);
        const habilidades = data.abilities.map((abilityData) => abilityData.ability.name);
        setPokemonAbilities(habilidades);
        setPokemonXP(data.base_experience);
      });
  }, [id]);

  const pokeAnterior = () => {
    if (id > 1) {
      setId(id - 1)
      console.log(id)
    }
  }

  const pokeSiguiente = () => {
    setId(parseInt(id) + 1)
    console.log(id)
  }

  const pokemonDescription = {
    tipo: pokemonType,
    habilidades: pokemonAbilities,
    xp: pokemonXP,
  }

  return (
    <div id='contenedor'>
      <CardPokemon title={pokemonName.toUpperCase()} image={pokemonImg} text={pokemonDescription} />
      <ButtonGroup id='grupoBotones'>
        <Button variant="secondary" size="lg" onClick={() => pokeAnterior()}>Anterior</Button>
        <Button variant="secondary" size="lg" onClick={() => pokeSiguiente()}>Siguiente</Button>        
      </ButtonGroup>
      <ButtonGroup id='grupoBotones'>
        <Button variant="secondary" size="lg" onClick={() => { mostrarApi() }}>Volver</Button>
      </ButtonGroup>
    </div>
  )
}

export default ApiPokemon