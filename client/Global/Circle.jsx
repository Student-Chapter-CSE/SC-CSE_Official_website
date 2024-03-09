' use client '
import '../styles/Circle.module.css'
import styles from '../styles/events/Interhacktive.module.css'

const Circle = ({name,logoUrl,href}) => {
  return (
    <div className={styles.circle} >
        <img className={styles.imaged} src={logoUrl} />
    </div>
  )
}

export default Circle