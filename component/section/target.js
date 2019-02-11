import withLayout from 'component/hoc/with-layout'
import DebouncedInput from 'component/container/debounced-input'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Notification from 'component/modal/notification'
const getPokePic = pokemon => {
  if(typeof(pokemon) !== 'undefined' && typeof(pokemon.sprites) !== 'undefined'){
    return pokemon.sprites.front_default
  }

  return ''
}

const Target = props => {
  let {className, search, pokemon, setPokemonSearch, setPokemon, searchEffects } = props
  return (
    <div className={className}>
      <img src={ getPokePic(pokemon) } alt='---'/>
      <DebouncedInput delay={ 1 } labelText='Search' value={ search }
        onChange={ setPokemonSearch } effects={ () => searchEffects(search.toLowerCase(),setPokemon) }/>
        <Notification text='Test'/>
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
