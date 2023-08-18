import styles from '../../styles/Event.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import DateElement from '../Date/date';

const Event = ({ img, heading, content, date, category, registrationLink }) => {
    const descRef = useRef()

    useEffect(() => {
        // I know this is bad but I don't have any
        // other option T_T
        descRef.current.innerHTML = content
    })

    return (
        // <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.card} data-is-upcoming={category == 'upcoming'}>
                <div className={styles.box}>
                    <div className={styles.imgBx}>
                        <img src={img} alt={heading} />
                    </div>
                    <div className={styles.contentBx}>
                        <h2 className={styles.contentHeader}>{heading}</h2>

                        <div className={styles.date}>
                            <h3><DateElement date={date} /></h3>
                        </div>

                        <div className={styles.contentContent} ref={descRef}>
                        </div>

                        {
                            category == 'upcoming' &&
                            <div className={styles.registerDiv}>
                                <a href={registrationLink} className={styles.register}>
                                    Register
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
