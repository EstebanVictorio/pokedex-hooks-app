import useDebounce from 'utils/hooks/use-debounce'


const DebouncedInput = props => {
  const { labelText, value, onChange ,effects, delay } = props
  useDebounce(value, delay, effects)
  return (
    <div>
      <label>{`${labelText}:`}</label>
      <input value={ value } onChange={ onChange }/>
    </div>
  )
}

export default DebouncedInput
