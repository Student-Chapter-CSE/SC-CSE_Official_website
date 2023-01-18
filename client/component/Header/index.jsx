import styles from '../../styles/Header.module.css';
import HeroCard from './HeroCard';
import HeroText from './HeroText';

const Header = () => {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.HeroCardContainer}>
                <HeroCard />
            </div>
            <div className={styles.HeroTextConatiner}>
                <HeroText />
            </div>
        </div>
    );
};

export default Header;
