'use client'
import { useEffect, useState } from 'react'
import { eventsData } from '../../data';
import styles from '../../styles/EventDrawer.module.css'
import Event from '../../component/Event';

const tabs = [
    { name: 'Upcoming' },
    { name: 'Recent' },
    { name: 'Past' },
]

export default function EventDrawer({ children }) {

    const [filteredData, setFilteredData] = useState([]);
    const [currentTabId, setCurrentTabId] = useState(0);

    const wantTabChange = (toId) => {
        if (toId == currentTabId)
            return;
        setCurrentTabId(toId)
    }

    const events = eventsData.filter(e => e.category === tabs[currentTabId].name.toLowerCase())
    useEffect(() => {
        setFilteredData(events)
    }, [currentTabId])

    return (
        <div className={styles.holder}>
            <div className={styles.events_header}>
                Events
            </div>

            {/* Tabs */}
            <nav className={styles.tabNav}>
                {
                    tabs.map((tab, i) => (
                        <div className={styles.tab}
                            key={i}
                            onClick={() => wantTabChange(i)}
                            data-active={currentTabId == i}
                        >
                            {tab.name}
                        </div>
                    ))
                }
            </nav>


            <div className={styles.drawer}>
                {
                    filteredData.map((eventsData, idx) => (
                        <Event
                            key={idx}
                            {...eventsData}
                        />
                    ))
                }
            </div>
        </div>
    )
}
