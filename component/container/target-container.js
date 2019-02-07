import { useState } from 'react'
import Target from 'component/section/target'
import { fetchByID, fetchByName } from 'utils/api'



const TargetContainer = () => {
  const [ pokemonID, setPokemonID ] = useState(0)
  const [ pokemonName, setPokemonName ] = useState('')
  const [ pokemon, setPokemon ] = useState({})


  return (
    <Target
      id={ pokemonID }
      pokemon={ pokemon }
      name={ pokemonName }
      setPokemonID={ e => setPokemonID(e.target.value) }
      setPokemonName={ e => setPokemonName(e.target.value) }
      setPokemon={ foundPokemon => setPokemon(foundPokemon) } />
    )
}

export default TargetContainer
