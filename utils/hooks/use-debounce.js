import { useEffect } from 'react'
import DebounceAgent from 'entity/agent/debounce-agent'


// const onDebounce = effects => {
//     const debounceAgent = new DebounceAgent(effects)
//     debounceAgent.dispatch()
// }

const useDebounce = (value, delay, effects) => {
  useEffect(() => {
    let timeout =
      setTimeout(() => effects(value), delay * 1000)
    return () => clearTimeout(timeout)
  }, [value])
}

export default useDebounce
