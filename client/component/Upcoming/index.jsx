import styles from '../../styles/Upcoming.module.css';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SponsorList } from '../Sponsor';
import { useEffect, useRef } from 'react';
import DateElement from '../Date/date';

export default function UpcomingEvents({ events }) {
    return (
        <>
            <section className={styles.upcomingItems}>
                <div className={styles.upcomingItemsHead}>
                    What's Upcoming
                </div>
                <div className={styles.upcomingEventsMainText}>
                    <h2>MARK YOUR CALENDARS</h2>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.upcomingBody}>
                    {
                        events.length ?
                            <div className={styles.upcomingCards}>
                                {
                                    events.map((event, i) => (
                                        <Card key={i} details={event} />
                                    ))
                                }
                            </div>
                            :
                            <div className={styles.willBeBackSoon}>
                                <div>No events for now</div>
                                <div>But we will be back soon :{')'}</div>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

function Card({ details, descriptionMaxLength = 200 }) {
    const contentRef = useRef()

    const isMedScreen = useMediaQuery('(min-width: 768px)')

    useEffect(() => {
        contentRef.current.innerHTML = details.content
    })
    
    function gotoLink(link) {
        /* TODO */
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={details.bannerImgUrl}></img>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardContent_Left}>
                    <div>
                        <div className={styles.cardTitle} onClick={() => details && details.link && gotoLink(details.link)}>
                            {details && details.heading}
                        </div>
                        <div className={styles.cardDate}>{
                            details && details.date && <DateElement date={details.date}/>
                        }</div>
                    </div>
                    {
                        isMedScreen && details.sponsors && <CardSponsorSection sponsors={details.sponsors}/>
                    }
                </div>
                <div className={styles.cardContent_Right}>
                    <div ref={contentRef} className={styles.cardEventDesc}>

                    </div>
                    <div className={styles.learnMore}>
                        <Link href="#">Learn More</Link>
                    </div>
                </div>
                {
                        !isMedScreen && details.sponsors && 
                        <div>
                            <CardSponsorSection sponsors={details.sponsors}/>
                        </div>
                }
            </div>
        </div>
    )
}

function CardSponsorSection({ sponsors }) {
    return (
        <div className={styles.sponsorListSection}>
            <div className={styles.sponsorListHeading}>
                Our Sponsors
            </div>
            <div className={styles.sponsorList}>
                <SponsorList sponsors={sponsors} />
            </div>
        </div>
    )
}