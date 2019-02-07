import { useState } from 'react'
import Target from 'component/section/target'
import useDebounce from 'utils/hooks/use-debounce'

const TargetContainer = ({ id = '---', name = 'Fetching...' }) => {
  const [ pokemonID, setPokemonID ] = useState(0)
  const [ pokemonName, setPokemonName ] = useState('')
  const [ pokemon, setPokemon ] = useState({id, name, data: null})

  return (
    <Target
      findByID={e => setPokemonID(e.target.value) }
      findByName={e => setPokemonName(e.target.value) }
      pokemon={ pokemon }/>
    )
}


export default TargetContainer
