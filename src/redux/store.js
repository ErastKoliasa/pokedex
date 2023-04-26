import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import { pokemonReducer } from "./reducer";

const store = createStore(pokemonReducer, applyMiddleware(thunk));
export default store