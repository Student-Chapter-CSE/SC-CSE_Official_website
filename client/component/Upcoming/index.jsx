import styles from '../../styles/Upcoming.module.css';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';
import SponsorList from '../Sponsor';
import { useEffect, useRef } from 'react';
import DateElement from '../Date';

const UpcomingEvents = ({ events }) => {
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
                                        <Card key={i} event={event} />
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

const Card = ({ event }) => {
    const contentRef = useRef()

    const isMedScreen = useMediaQuery('(min-width: 768px)')

    useEffect(() => {
        contentRef.current.innerHTML = event.content
    }, [])


    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={event.bannerImgUrl}></img>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardContent_Left}>
                    <div>
                        <div className={styles.cardTitle}>
                            {event && event.heading}
                        </div>
                        <div className={styles.cardDate}>{
                            event && event.date && <DateElement date={event.date} />
                        }</div>
                    </div>
                    {
                        isMedScreen && event.sponsors && <CardSponsorSection sponsors={event.sponsors} />
                    }
                </div>
                <div className={styles.cardContent_Right}>
                    <div ref={contentRef} className={styles.cardEventDesc}>

                    </div>
                    <div className={styles.learnMore}>
                        <Link href={typeof (event.pageUrl) === 'string' ? event.pageUrl : "#"}>
                            Learn More
                        </Link>
                    </div>
                </div>
                {
                    !isMedScreen && event.sponsors &&
                    <div>
                        <CardSponsorSection sponsors={event.sponsors} />
                    </div>
                }
            </div>
        </div>
    )
}

const CardSponsorSection = ({ sponsors }) => {
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


export default UpcomingEvents