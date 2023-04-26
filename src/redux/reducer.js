const initialState = {
    pokeData: [],
    pokemonInfo: "",
    nextUrl: "",
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POKEMONS_DATA":
            return {
                ...state,
                pokeData: [...state.pokeData, action.payload],
            };
        case "SET_POKEMON_INFO":
            return {
                ...state,
                pokemonInfo: action.payload,
            };
        case "SET_NEXT_URL":
            return {
                ...state,
                nextUrl: action.payload,
            };
        default:
            return state;
    }
};