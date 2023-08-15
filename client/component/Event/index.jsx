import styles from '../../styles/Event.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Event = ({ img, heading, content, date, category, registrationLink }) => {
    const descRef = useRef()

    function nth(d) {
        const dString = String(d)
        const last = +dString.slice(-2)
        if (last > 3 && last < 21) return 'th'
        switch (last % 10) {
            case 1: return "st"
            case 2: return "nd"
            case 3: return "rd"
            default: return "th"
        }
    }

    function dateToText(date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return `${date.getDate()}${nth(date.getDate())}  ${months[date.getMonth()]}, ${date.getFullYear()}`
    }

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
                        <Image src={img} alt={heading} />
                    </div>
                    <div className={styles.contentBx}>
                        <h2 className={styles.contentHeader}>{heading}</h2>

                        <div className={styles.date}>
                            <h3>{dateToText(date)}</h3>
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
