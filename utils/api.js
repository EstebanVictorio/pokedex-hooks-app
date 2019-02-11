const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemonByID = async id => fetch(API_URL + id)

export const getPokemonByName = async name => fetch(API_URL + name)

export default {
    getPokemonByID,
    getPokemonByName
}