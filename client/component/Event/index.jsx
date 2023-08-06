import styles from '../../styles/Event.module.css';
import Image from 'next/image'
import Avatar from '../../assets/avatar.png'
const upcoming = ({ img, heading, content, date }) => {
    return (
        // <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.imgBx}>
                        <Image src={img} />
                    </div>
                    <div className={styles.contentBx}>

                        <h2 className={styles.contentHeader}>{heading}</h2>

                        <div className={styles.color}>


                            <p style={{ color: 'white' }}>
                                {content}
                            </p>
                        </div>
                        <a href="#" style={{ marginTop: '20px' }}>
                            Register
                        </a>
                    </div>
                </div>
                <div className={styles.date}>
                    <h3>{date}</h3>
                </div>
            </div>
        </div>
    );
};

export default upcoming;
