import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className={styles.container}>
            hi
            <button id="test1-btn" onClick={() => setClicked(!clicked)}>
                click me
            </button>
            <div id="test1-result">{clicked ? 'clicked' : 'not clicked'}</div>
        </div>
    );
}
