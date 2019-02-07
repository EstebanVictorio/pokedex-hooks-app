import withLayout from 'component/hoc/with-layout'
import DebouncedInput from 'component/container/debounced-input'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Target = props => {
  let {className, id, name, setPokemonID, setPokemonName, pokemon = {} } = props
  return (
    <div className={className}>
      <img src={ '' } alt='---'/>
      <DebouncedInput delay={ 1 } labelText='ID' value={ id }
        onChange={ setPokemonID } effects={ [] }/>
      <DebouncedInput delay={ 1 } labelText='Name' value={ name }
        onChange={ setPokemonName } effects={ [] }/>
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
