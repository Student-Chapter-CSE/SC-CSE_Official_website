'use client'

import Link from 'next/link';

import DateElement from '../../../component/Date';
import SponsorList from '../../../component/Sponsor';
import { EVENTS } from '../../../data'
import styles from '../../../styles/events/techquisitive.module.css'
import useMediaQuery from '../../../hooks/useMediaQuery'

import { ArrowDown, CalendarCheck, LinkedinLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';


import Prizes from '../../../Global/Prizes';

const GlassCard = ({ image, text }) => {
    return (
      <div className={styles.glassCard}>
        <img src={image} alt="Prize" className={styles.cardImage} />
        <p className={styles.cardText}>{text}</p>
      </div>
    );
  };
  
const Techquisitive = () => {
    const event = EVENTS?.techquisitive5;
    const prize = event?.prizes;
    const track = event?.tracks;
    const eventSchedule=event?.event;
    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.articleTitle}>
                        {event?.heading}
                    </div>
                    
                    
                </div>

                <div className={styles.eventBanner}>
                    <img src="/static/assets/techlogo.png" className={styles.image} alt='techquisitive'></img>
                </div>

                <div className={styles.section}>
                    <a className={styles.registerBtn} href={event?.registrationLink} target='_blank'>Register</a>
                </div>

                <div className={`${styles.normalTxt} ${styles.section}`}>
                    <p>The biggest event in the history of Students&apos; Chapter AOT,Techquisitive Season 5 make the participants more inquisitive about technology and development as this is not just one or two events, but a combo of events, combining coding, gaming and quiz, in a grand way!</p>
                </div>
                {/* <div className={styles.prizeHeading}>
                    Event Schedule
                </div>
                <div className={styles.scheduleContainer}>
                    {eventSchedule.map((event, id) => (
                    <div key={id} className={styles.scheduleItem}>
                     <div className={styles.event}>
                        {event.name}
                    </div>
      <div className={styles.date}>{event.date}</div>
      
    </div>
  ))}
</div> */}
                <div className={styles.prizeHeading}>
                    Prizes
                </div>

                <div className={styles.cardContainer}>
        {prize.map((prize, id) => (
          <GlassCard key={id} image={prize.image} text={<span className={styles.content}>{prize.amt}</span>} />
        ))}
      </div>

                <div className={styles.prizeHeading}>
                Track Details
                </div>
                
                <div className={styles.cardContainer}>
                    {track.map((track, id) => (
                    <GlassCard key={id} image={track.logoUrl} className={styles.cardImageone} text={<span className={styles.content}>{track.name}</span>}  />
                ))}
                </div>
                

                
                

               
               
                
                </div>

                

                
            </div>
        
    )
}

const Prize = ({image, num,amt}) => {
    return(
        <div>
            <Prizes img={image} num={num} amt={amt} />
        </div>
    )
}











export default Techquisitive;
