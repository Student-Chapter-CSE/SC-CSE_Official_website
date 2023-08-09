'use client'

import styles from '../../styles/Event.module.css';
import Event from '../../component/Event';

import { eventsData } from '../../data';
import EventDrawer from '../../component/EventDrawer';

export default function events() {

    const upcoming = eventsData.filter(e => e.category == 'upcoming')
    const past = eventsData.filter(e => e.category == 'past')

    return (
        <>
            <div className={styles.events_container}>
                <div className={styles.events_holder}>
                    <EventDrawer>
                        <EventList events={upcoming}  />
                        <EventList events={past} />
                    </EventDrawer>
                </div>
            </div>
        </>
    )
}


function EventList({ events }) {
    return (
        <div>
            {events.map((eventsData, idx) => (
                <Event
                    key={idx}
                    img={eventsData.img}
                    heading={eventsData.heading}
                    content={eventsData.content}
                    date={eventsData.date}
                />
            ))}
        </div>
    )
}

