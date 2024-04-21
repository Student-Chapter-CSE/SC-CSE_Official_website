import styles from '../../styles/Event.module.css';
import EventDrawer from '../../component/EventDrawer';

export default function Events() {

    return (
        <div className={styles.events_container}>
            <div className={styles.events_holder}>
                <EventDrawer />
            </div>
        </div>
    )
}
