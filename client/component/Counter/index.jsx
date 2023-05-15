import React from 'react'

import styles from '../../styles/Counter.module.css';

const Counter = () => {
  return (
    <>
            <section id={styles.counter_container}>
                <div className={styles.counter_container_wrap}>
                    
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>150+</div>
                        <div className={styles.counter_title}>Students</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>10+</div>
                        <div className={styles.counter_title}>Students</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>15+</div>
                        <div className={styles.counter_title}>Students</div>
                    </div>
                    <div className={styles.counter_item}>
                        <div className={styles.counter_number}>1500+</div>
                        <div className={styles.counter_title}>Students</div>
                    </div>
                    

                    
                </div>
            </section>
        </>
  )
}

export default Counter