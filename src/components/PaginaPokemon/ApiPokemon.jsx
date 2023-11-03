import React, { useEffect, useState } from 'react'
import CardPokemon from './CardPokemon'
import {Button, ButtonGroup } from 'react-bootstrap';


function ApiPokemon({mostrarApi, selectedPokemonId}) {

  let [pokemonName, setPokemonName] = useState('')
  let [pokemonImg, setPokemonImg] = useState('')
  const [pokemonType, setPokemonTypes] = useState([]);
  const [id, setId] = useState(selectedPokemonId);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(result => result.json())
      .then(data => {
        setPokemonName(data.name);
        setPokemonImg(data.sprites.other.dream_world.front_default)
        const types = data.types.map((typeData) => typeData.type.name);
        setPokemonTypes(types);
      });
  }, [id]);


  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <CardPokemon title={pokemonName.toUpperCase()} image={pokemonImg} />
      <ul style={{display: 'flex'}}>
        {pokemonType.map((type, index) => (
          <p style={{margin: '0 10px', fontWeight: 'bold'}} key={index}>Tipo: {type.toUpperCase()}</p>
        ))}
      </ul>

      <ButtonGroup style={{ width: '30%'}}>
        {/* <Button variant="secondary" size="lg" onClick={() => { if (id > 1) { setId(id - 1) }}}>Anterior</Button> */}
        <Button variant="secondary" size="lg" onClick={() => {mostrarApi()}}>Volver</Button>
        {/* <Button variant="secondary" size="lg" onClick={() => { setId(id + 1) }}>Siguiente</Button> */}
      </ButtonGroup>
    </div>
  )
}

export default ApiPokemon