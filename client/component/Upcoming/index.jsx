import s from '../../styles/Upcoming.module.css';
import Link from 'next/link'

const UpcomingEvents = () => {
    return (
        <>
            <section id={s.upcomingItems}>
                <div id={s.upcomingItemsHead}>
                    <p>WHAT'S</p>
                    <p>UPCOMING?</p>
                </div>
                <div id={s.upcomingItemsCards}>
                    <div id={s.upcomingEventsMainText}>
                        <h2>MARK YOUR CALENDARS!</h2>
                    </div>
                    <div id={s.upcomingCards}>
                        <div className={s.upCard}>
                            <div className={s.cardTop}>
                                10th August, 2023
                            </div>
                            <div className={s.cardBottom}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium deleniti cupiditate ullam, animi reprehenderit officia aliquid ipsam veniam rem? <br />
                                <span><Link href=''>Know more</Link></span>
                            </div>
                        </div>


                        <div className={s.upCard}>
                            <div className={s.cardTop}>
                                10th August, 2023
                            </div>
                            <div className={s.cardBottom}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium deleniti cupiditate ullam, animi reprehenderit officia aliquid ipsam veniam rem? <br />
                                <span><Link href=''>Some Link</Link></span>
                            </div>
                        </div>

                        <div className={s.upCard}>
                            <div className={s.cardTop}>
                                10th August, 2023
                            </div>
                            <div className={s.cardBottom}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium deleniti cupiditate ullam, animi reprehenderit officia aliquid ipsam veniam rem? <br />
                                <span><Link href=''>Some Link</Link></span>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default UpcomingEvents;
