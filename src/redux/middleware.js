import axios from "axios";
import { setNextUrl, setPokemonsData } from "./action";

export const getPokemonsData = (url = "https://pokeapi.co/api/v2/pokemon/" ) => {
    return async (dispatch) => {
        const res = await axios.get(url);
        dispatch(setNextUrl(res.data.next));
        dispatch(getPokemons(res.data.results));
    };
};

const getPokemons = (pokemonArray) => {
    return async (dispatch) => {
        for (const pokemon of pokemonArray) {
            const result = await axios.get(pokemon.url);
            dispatch(setPokemonsData(result.data));
        }
    };
};