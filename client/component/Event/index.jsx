'use client'
import styles from '../../styles/Event.module.css';
import { useEffect, useRef } from 'react';
import DateElement from '../Date';

import { useRouter } from 'next/navigation';

export default function Event ({ img, heading, content, date, pageUrl }) {
    const descRef = useRef()
    const router = useRouter()

    useEffect(() => {
        // I know this is bad but I don't have any
        // other option T_T
        descRef.current.innerHTML = content
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.card}
                onClick={() => typeof(pageUrl) === 'string' && router.push(pageUrl)}
            >
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
                    </div>
                </div>
            </div>
        </div>
    );
};
