import { useState } from 'react'
import Target from 'component/section/target'
import { getPokemonByID, getPokemonByName } from 'utils/api'




const searchEffects = (value, setPokemon) => {
  getPokemonByID(value)
    .then(response => response.json().catch(err => console.log(err)))
    .then(json => setPokemon(json))
    .catch(err => console.log(error))
}

const TargetContainer = () => {
  const [ pokemonSearch, setPokemonSearch ] = useState('')
  const [ pokemon, setPokemon ] = useState({})
  console.log('Render')
  return (
    <Target
      search={ pokemonSearch }
      pokemon={ pokemon }
      setPokemonSearch={ e => setPokemonSearch(e.target.value) }
      setPokemon={ setPokemon } 
      searchEffects={searchEffects}/>
    )
}

export default TargetContainer
