import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {

    const [text] = useTypewriter({
        words: ["Students' Chapter CSE"],
        loop: true,
        typeSpeed: 60,
        delaySpeed: 2000,
    })

    return (
        <div className={styles.HeroContainer}>
            <div className={styles.HeroCardContainer}>
                <Image
                    className={styles.CardImageContainer}
                    src='/static/assets/cardimg.webp'
                    alt="Image container pic"
                    width={500}
                    height={350}
                    priority={true}
                />
            </div>
            <div className={styles.HeroTextContainer}>
                <p>Hey, there !</p>
                <p>We are,</p>
                <p className={styles.herotextBigfont}>
                    {text}
                    <Cursor cursorColor='var(--fontColor)' cursorStyle='.' />
                </p>
                <p>and this is our,</p>
                <p className={styles.herotextHighlight}>Official Website</p>
            </div>
        </div>
    );
};

export default Header;
