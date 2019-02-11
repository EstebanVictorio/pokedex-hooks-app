export const useDoppler = (action, effect) => {
    action().then(effect)
} 

export const useMumblingDoppler = (action, effects) => {
    action().then(() => effects.map(effect => { effect() }))
}

export const useEchoDoppler = bonds => {
    bonds.map(bond => bond[0]().then(bond[1]))
} 

export default {
    useDoppler,
    useMumblingDoppler,
    useEchoDoppler
}