import styles from '../../styles/Header.module.css';
const HeroText = () => {
    return (
        <>
            <div className={styles.HeroTextContainer}>
                <p>Hey, there !</p>
                <p>We are,</p>
                <p className={styles.herotextBigfont}>
                    Students' <p>Chapter CSE</p>{' '}
                </p>
                <p>and this is our,</p>
                <p className={styles.herotextHighlight}>Official Website</p>
            </div>
        </>
    );
};

export default HeroText;
