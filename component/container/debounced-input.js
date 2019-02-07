import useDebounce from 'utils/hooks/use-debounce'

const DebouncedInput = props => {
  const { labelText, value, onChange, onDebounce, delay } = props
  console.log(`Used debounced effect: ${useDebounce(value, onDebounce, delay)}`)
  return <div>
    <label>{`${labelText}:`}</label>
    <input value={ value } onChange={ onChange }/>
  </div>
}

export default DebouncedInput
