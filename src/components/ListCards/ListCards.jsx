import styles from './ListCards.module.css'

const ListCards = ({ pokemons, infoPokemon, filteredTypes }) => {
    let color;
    const getColor = type => {
        switch (type) {
            case 'grass':
                color = styles.grass;
                break;
            case 'poison':
                color = styles.poison;
                break;
            case 'fire':
                color = styles.fire;
                break;
            case 'electric':
                color = styles.electric;
                break;
            case 'water':
                color = styles.water;
                break;
            case 'flying':
                color = styles.flying;
                break;
            case 'bug':
                color = styles.bug;
                break;
            case 'ground':
                color = styles.ground;
                break;
            case 'fairy':
                color = styles.fairy;
                break;
            default:
                color = styles.default
        }
    }

    return (
        <div className={styles.listCards}>
            {
                pokemons.map((item) => {
                    return (
                        <div className={styles.card} key={item.id} onClick={() => infoPokemon(item)}>
                            <img className={styles.listImage} src={item.sprites.front_default} alt="pokemon" />
                            <h2>{item.name}</h2>
                            <p className={styles.typesContainer}>
                                {item.types.map(type => {
                                    getColor(type.type.name)
                                    return (
                                        <p className={`${color} ${styles.type}`}>{type.type.name}</p>
                                    )
                                })}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ListCards;
