import { useState, useEffect } from 'react'


const cleanupDebounce = timeout => {
  clearTimeout(timeout)
  console.log('Cleanup debounce')
}

const useDebounce = (value, delay, onDebounce) => {
  const usedDebouncedEffect = false

  useEffect(() => {
    let timeout =
      setTimeout(() => usedDebouncedEffect = onDebounce(value), delay)
    return () => cleanupDebounce(timeout)
  }, [value])

  return usedDebouncedEffect
}

export default useDebounce
