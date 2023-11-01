import React, {useEffect} from 'react'


const Api = () => {

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(result => result.json())
      .then(data => {console.log(data.results)
      });
  }, []);
  return (
    <div>
    </div>
  )
}

export default Api

