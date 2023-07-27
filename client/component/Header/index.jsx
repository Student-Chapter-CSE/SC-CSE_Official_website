import styles from '../../styles/Header.module.css';
import CardImg from '../../assets/cardimg.webp';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {

    const [text] = useTypewriter({
        words: ["Students' Chapter CSE"],
        loop: true,
        typeSpeed: 70,
        delaySpeed: 2000,

    })

    return (
        <div className={styles.HeroContainer}>
            <div className={styles.HeroCardContainer}>
                <div className={styles.Card}>
                    <Image
                        className={styles.CardImageContainer}
                        src={CardImg}
                        alt="Image container pic"
                        width={500}
                        height={350}
                    />
                </div>
            </div>
            <div className={styles.HeroTextConatiner}>
                <div className={styles.HeroTextContainer}>
                    <p>Hey, there !</p>
                    <p>We are,</p>
                    <p className={styles.herotextBigfont}>
                        {/* Students' <span>Chapter CSE</span>{' '} */}
                        {text}
                        <Cursor cursorColor='var(--themeYellowDark)' cursorStyle='.' />
                    </p>
                    <p>and this is our,</p>
                    <p className={styles.herotextHighlight}>Official Website</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
