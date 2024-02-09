import React from 'react'

import styles from '../../styles/Counter.module.css';

const Counter = () => {
  return (
    <>
            <section id={styles.counter_container}>
                <div className={styles.counter_container_wrap}>
                    
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>250+</div>
                        <div className={styles.counter_title}>Community Members</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>50+</div>
                        <div className={styles.counter_title}>Events</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>10</div>
                        <div className={styles.counter_title}>Core Members</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>3000+</div>
                        <div className={styles.counter_title}>Supporters</div>
                    </div>
                    

                    
                </div>
            </section>
        </>
  )
}

export default Counter