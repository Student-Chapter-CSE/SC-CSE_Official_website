import styles from '../styles/Event.module.css';
import Upcoming from '../component/Event/upcoming';

export const events = () => {
  return (
    <>
    {/* <div className={styles.bg}/> */}
      <div>
        <h1>Events</h1>
        <p>Find the latest events</p>
        <Upcoming/>
      </div>
          
    </>
  )
}

export default events

