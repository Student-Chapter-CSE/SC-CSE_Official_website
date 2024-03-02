import NextLink from 'next/link';
import styles from '../styles/Error.module.css';

const NotFound = () => {
    return (
        <div className={styles.error}>
            <div className={styles.NotFound}>
                <h1>404</h1>
                <h2>Oops! Invalid Page!(</h2>
            </div>

            <div className={styles.button}>
                <NextLink
                    style={{ textDecoration: 'none', color: 'black' }}
                    href="/"
                >
                    Return to Homepage:
                </NextLink>
            </div>
        </div>
    );
};

export default NotFound;
