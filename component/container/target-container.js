import { useState } from 'react'
import Target from 'component/section/target'
import { getPokemonByID, getPokemonByName } from 'utils/api'




const idEffects = (value, setPokemon) => {
  getPokemonByID(value)
    .then(response => response.json().catch(err => console.log(err)))
    .then(json => setPokemon(json))
    .catch(err => console.log(error))
}

const nameEffects = (value, setPokemon) => {
  getPokemonByName(value)
  .then(response => response.json().catch(err => console.log(err)))
  .then(json => setPokemon(json))
  .catch(err => console.log(error))
}

const TargetContainer = () => {
  const [ pokemonID, setPokemonID ] = useState('')
  const [ pokemonName, setPokemonName ] = useState('')
  const [ pokemon, setPokemon ] = useState({})
  console.log('Render')
  return (
    <Target
      id={ pokemonID }
      pokemon={ pokemon }
      name={ pokemonName }
      setPokemonID={ e => setPokemonID(e.target.value) }
      setPokemonName={ e => setPokemonName(e.target.value) }
      setPokemon={ setPokemon } 
      idEffects={idEffects}
      nameEffects={nameEffects}/>
    )
}

export default TargetContainer
