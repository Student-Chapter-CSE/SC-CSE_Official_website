import styles from '../../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.outer_container}>
            <div className={styles.about_heading}>ABOUT US</div>
            <div className={styles.card_container}>
                <div className={styles.card_section}>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                </div>
                <div className={styles.card_section}>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>FRONT</div>
                        <div className={styles.card_back}>BACK</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
