import React from 'react'

import styles from '../../styles/Counter.module.css';

const Counter = () => {
  return (
    <>
            <section id={styles.counter_container}>
                <div className={styles.counter_container_wrap}>
                    
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>200+</div>
                        <div className={styles.counter_title}>Community Members</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>30+</div>
                        <div className={styles.counter_title}>Events</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>15+</div>
                        <div className={styles.counter_title}>Core Members</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>2500+</div>
                        <div className={styles.counter_title}>Supporters</div>
                    </div>
                    

                    
                </div>
            </section>
        </>
  )
}

export default Counter