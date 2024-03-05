'use client'
import styles from '../styles/events/Interhacktive.module.css';

const Prizes = ({img,num,amt}) => {
    // console.log(img);
    return (
        <div>
            <div className={styles.prizeList}>
                <div className={styles.prize}>
                    <div className={styles.prizeTitle}>
                       <img src={img} style={{width: '2vw', height:'2vw',objectFit:'cover'}} /> {num} : {amt}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prizes;
