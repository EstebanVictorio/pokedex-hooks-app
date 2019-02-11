import withLayout from 'component/hoc/with-layout'
import DebouncedInput from 'component/container/debounced-input'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const getPokePic = pokemon => {
  if(typeof(pokemon) !== 'undefined' && typeof(pokemon.sprites) !== 'undefined'){
    return pokemon.sprites.front_default
  }

  return ''
}

const Target = props => {
  let {className, id, name, pokemon, setPokemonID, setPokemonName, setPokemon, idEffects, nameEffects } = props
  return (
    <div className={className}>
      <img src={ getPokePic(pokemon) } alt='---'/>
      <DebouncedInput delay={ 1 } labelText='ID' value={ id }
        onChange={ setPokemonID } effects={ () => idEffects(id,setPokemon) }/>
      <DebouncedInput delay={ 1 } labelText='Name' value={ name }
        onChange={ setPokemonName } effects={ () => nameEffects(name,setPokemon) }/>
    </div>
  )
}

Target.defaultProps = {
  value: '',
}



const StyledTarget = styled(Target)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default withLayout(StyledTarget)
