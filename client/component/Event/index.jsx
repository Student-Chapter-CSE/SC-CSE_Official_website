import styles from '../../styles/Event.module.css';
import Image from 'next/image';

const Event = ({ img, heading, content, date }) => {
    return (
        // <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.imgBx}>
                        <Image src={img} alt={heading} />
                    </div>
                    <div className={styles.contentBx}>
                        <h2 className={styles.contentHeader}>{heading}</h2>

                        <div className={styles.date}>
                            <h3>{date}</h3>
                        </div>

                        <div className={styles.contentContent}>
                            <p style={{ color: 'white' }}>{content}</p>
                        </div>
                        <div className={styles.registerDiv}>
                            <a href="#" className={styles.register}>
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
