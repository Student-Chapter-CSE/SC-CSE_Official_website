import styles from '../../styles/Preloader.module.css';

const Preloader = ({ width, height }) => {
    return (
        <div className={styles.spinnerContainer}>
            <div
                className={styles.loadingSpinner}
                style={{ width: `${width}`, height: `${height}` }}
            ></div>
        </div>
    );
};
export default Preloader;
