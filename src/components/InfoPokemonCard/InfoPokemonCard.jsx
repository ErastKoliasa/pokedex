import styles from './InfoPokemonCard.module.css'

const InfoPokemonCard = ({ data }) => {
    return (
        <div>
            {
                (!data) ? "" : (
                    <div className={styles.container}>
                        <img className={styles} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="pokemon"/>
                        <h2>{`${data.name} #${data.id}`}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Type</td>
                                    <td>
                                        {data.types.map(type => {
                                        return (
                                            <div>{ type.type.name }</div>
                                        )})}
                                    </td>
                                </tr>
                                {
                                    data.stats.map(poke => {
                                        return (
                                            <tr className={styles.baseStat}>
                                                <td>{poke.stat.name}</td>
                                                <td>{poke.base_stat}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>
                                        Weight
                                    </td>
                                    <td>
                                        {data.weight}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}
export default InfoPokemonCard;
