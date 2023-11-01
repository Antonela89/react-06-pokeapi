import React, {useEffect, useState} from 'react'
import CardContendor from './CardContenedor'

const Siguiente = () => {
    let [pokemonName, setPokemonName] = useState('')
  let [pokemonImg, setPokemonImg] = useState('')
  const [id, setId] = useState(1);

  function siguiente() {
    setId(id + 1);
  }


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(result => result.json())
      .then(data => {
        setPokemonName(data.name);
        setPokemonImg(data.sprites.front_default);
      });
  }, [id]);


  return (
    <div style={{width:'100%',display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
      <CardContendor  title={pokemonName.toUpperCase()} image = {pokemonImg} />
        <button className='' onClick={siguiente}> Siguiente </button>
    </div>
  )
}

export default Siguiente
