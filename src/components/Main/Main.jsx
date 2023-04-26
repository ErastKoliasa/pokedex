import { useDispatch, useSelector } from "react-redux";
import { getPokemonsData } from "../../redux/middleware";
import { setPokemonInfo } from "../../redux/action";
import { useEffect } from "react";
import ListCards from "../ListCards/ListCards";
import InfoPokemonCard from "../InfoPokemonCard/InfoPokemonCard";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import styles from './Main.module.css'

const Main = () => {
    const dispatch = useDispatch();
    const pokeData = useSelector((state) => state.pokeData);
    const pokemonInfo = useSelector((state) => state.pokemonInfo);
    const nextUrl = useSelector((state) => state.nextUrl);

    useEffect(() => {
        dispatch(getPokemonsData());
    }, [dispatch]);

    const handleLoadMoreClick = () => {
        dispatch(getPokemonsData(nextUrl));
    };

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1 className={styles}>Pokedex</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.leftContent}>{
                    <ListCards pokemons={pokeData} infoPokemon={(pokemon) => dispatch(setPokemonInfo(pokemon))} />}
                    <ButtonLoadMore handleLoadMoreClick={handleLoadMoreClick} />
                </div>
                <div className={styles.rightContent}>
                    <InfoPokemonCard data={pokemonInfo} />
                </div>
            </div>
        </div>
    )
}

export default Main;