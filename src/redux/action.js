export const setPokemonsData = (pokeData) => ({
    type: "SET_POKEMONS_DATA",
    payload: pokeData,
});

export const setPokemonInfo = (pokemonInfo) => ({
    type: "SET_POKEMON_INFO",
    payload: pokemonInfo,
});

export const setNextUrl = (nextUrl) => ({
    type: "SET_NEXT_URL",
    payload: nextUrl,
});