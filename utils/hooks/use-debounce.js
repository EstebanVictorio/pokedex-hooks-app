import { useEffect } from 'react'
import DebounceAgent from 'entity/agent/debounce-agent'


const areImmediateEffects = effects =>
  effects.filter(effect => typeof(effect.then) === 'undefined').length === 0




const onDebounce = effects => {
  if(areImmediateEffects(effects)){
    effects.map(effect => effect())
  }else{
  }
}

const useDebounce = (value, delay, effects) => {
  useEffect(() => {
    let timeout =
      setTimeout(() => onDebounce(effects), delay * 1000)
    return () => clearTimeout(timeout)
  }, [value])
}

export default useDebounce
