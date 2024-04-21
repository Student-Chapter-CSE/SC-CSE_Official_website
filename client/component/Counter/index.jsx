import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Counter.module.css';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    communityMembers: 0,
    events: 0,
    coreMembers: 0,
    supporters: 0
  });
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetCounts = {
        communityMembers: 250,
        events: 50,
        coreMembers: 10,
        supporters: 3000
      };

      const animationDuration = 2000; // Animation duration in milliseconds
      const incrementInterval = 50; // Interval for each increment

      // Calculate increment step for each counter
      const incrementStep = {};
      Object.keys(targetCounts).forEach(key => {
        incrementStep[key] = targetCounts[key] / (animationDuration / incrementInterval);
      });

      const interval = setInterval(() => {
        setCounters(prevCounters => {
          const updatedCounters = { ...prevCounters };
          Object.keys(updatedCounters).forEach(key => {
            updatedCounters[key] = Math.min(targetCounts[key], prevCounters[key] + incrementStep[key]);
          });
          return updatedCounters;
        });
      }, incrementInterval);

      // Clear interval when component unmounts or counter reaches target value
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <>
      <section ref={counterRef} id={styles.counter_container}>
        <div className={styles.counter_container_wrap}>
          <div className={styles.counter_item}>
            <div className={styles.counter_number}>{counters.communityMembers.toFixed(0)}+</div>
            <div className={styles.counter_title}>Community Members</div>
          </div>
          <div className={styles.counter_item}>
            <div className={styles.counter_number}>{counters.events.toFixed(0)}+</div>
            <div className={styles.counter_title}>Events</div>
          </div>
          <div className={styles.counter_item}>
            <div className={styles.counter_number}>{counters.coreMembers.toFixed(0)}</div>
            <div className={styles.counter_title}>Core Members</div>
          </div>
          <div className={styles.counter_item}>
            <div className={styles.counter_number}>{counters.supporters.toFixed(0)}+</div>
            <div className={styles.counter_title}>Supporters</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
