import styles from '../../styles/Upcoming.module.css';
import Link from 'next/link';

export default function UpcomingEvents({ events }) {
    return (
        <>
            <section className={styles.upcomingItems}>
                <div className={styles.upcomingItemsHead}>
                    What's Upcoming
                </div>
                <div className={styles.upcomingEventsMainText}>
                    <h2>MARK YOUR CALENDARS!</h2>
                </div>
                <div className={styles.upcomingBody}>
                    {
                        events ?
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
    );
};

function Card({ details, descriptionMaxLength = 200}) {

    function nth(d) {
        const dString = String(d);
        const last = +dString.slice(-2);
        if (last > 3 && last < 21) return 'th';
        switch (last % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    function dateToText(date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${date.getDate()}${nth(date.getDate())}  ${months[date.getMonth()]}, ${date.getFullYear()}`
    }

    function gotoLink(link) {
        /* TODO */
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardTitle} onClick={() => details && details.link && gotoLink(details.link)}>
                {details && details.title}
            </div>
            <div className={styles.cardDate}>{
                details && details.date && dateToText(details.date)
            }</div>
            <div className={styles.cardDesc}>
                {details && details.desc && 
                details.desc.length > descriptionMaxLength && 
                details.desc.substring(0, descriptionMaxLength) + '...' || 
                details.desc}
            </div>
        </div>
    )
}

const dummy = {
    title: 'Lorem ipsum dolor, sit amet consectetur.',
    date: new Date(),
    desc: ` Lorem ipsum dolor sit amet consectetur
adipisicing elit. Ex praesentium deleniti
cupiditate ullam, animi reprehenderit officia
aliquid ipsam veniam rem?`
}

export function generateDummyEvents(n) {
    let events = []
    for (let i = 0; i < n; ++i)
        events.push(dummy)
    return events
}