import styles from '../../styles/Event.module.css';

const upcoming = () => {
    return (
        // <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.imgBx}>
                        <img src="data:image/png;base64,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" />
                    </div>
                    <div className={styles.contentBx}>
                        <h2>HACK FOR BENGAL</h2>

                        <div className={styles.size}>
                            <p>
                                Event Description: Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.{' '}
                            </p>
                        </div>
                        <div className={styles.color}>
                            <h3>Rules</h3>

                            <p style={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <a href="#" style={{ marginTop: '20px' }}>
                            Register
                        </a>
                    </div>
                </div>
                <div className={styles.date}>
                    <h3>20th march</h3>
                </div>
            </div>
        </div>
    );
};

export default upcoming;
