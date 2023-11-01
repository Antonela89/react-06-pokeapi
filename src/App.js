import { useEffect, useState } from 'react'
import './App.css'

function App() {

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
    <>
      <div className=''>
        <h1 className=''>{pokemonName.toUpperCase()}</h1>
        <img src={pokemonImg} alt="" className='' />
        <button className='' onClick={siguiente}> Siguiente </button>
        <p>© JSA </p>
      </div>
    </>
  )
}

export default App