import styles from './ButtonLoadMore.module.css'

const ButtonLoadMore = ({handleLoadMoreClick}) => {
    return (
        <div className={styles.buttonContainer}>
            <button onClick={handleLoadMoreClick}>Load More</button>
        </div>
    )
}
export default ButtonLoadMore;
