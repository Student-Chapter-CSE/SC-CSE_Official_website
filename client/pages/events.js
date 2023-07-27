import styles from '../styles/EventPage.module.css';
import EventDrawer from '../component/EventDrawer';
const events = () => {
    return (
        <>
            <div className={styles.pageHolder}>
                {/* <div className={styles.bg}/> */}
                <div className={styles.pageBody}>
                    <h1 className={styles.pageHead}>Events</h1>
                    <p className={styles.pageSubHead}>Find the latest events</p>
                    <EventDrawer>
                        <div className={styles.test}> 
                           Section 1
                        </div>
                        <div className={styles.test}>
                            Section 2
                        </div>
                    </EventDrawer>
                </div>
            </div>
        </>
    );
};

export default events;
