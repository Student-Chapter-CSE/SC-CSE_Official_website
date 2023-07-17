import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import CardImg from '../../assets/cardimg.webp';

const HeroCard = () => {
    return (
        <>
            <div className={styles.Card}>
                <div className={styles.CardImageContainer}>
                    <Image
                        src={CardImg}
                        alt="Image container pic"
                        width={300}
                        height={350}
                    />
                </div>
            </div>
        </>
    );
};

export default HeroCard;
