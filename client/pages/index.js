import { lazy, Suspense } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../component/Navbar'
import Preloader from '../component/Preloader'
import { upcomingEvents } from '../assets/data';


const Header = lazy(() => import('../component/Header'))
const Counter = lazy(() => import('../component/Counter'))
const Hod = lazy(() => import('../component/Hod'))
const About = lazy(() => import('../component/About'))
const UpcomingEvents = lazy(() => import('../component/Upcoming'))
const Footer = lazy(() => import('../component/Footer'))


export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div><Navbar /></div>
                <Suspense fallback={<Preloader />}>
                    <div><Header /></div>
                    <div className={styles.sectionHolder}><Counter /></div>
                    <div className={styles.sectionHolder}><Hod /></div>
                    <div className={styles.sectionHolder}><About /></div>
                    <div className={styles.sectionHolder}><UpcomingEvents events={upcomingEvents} /></div>
                    <div><Footer /></div>
                </Suspense>
            </div>
        </>
    );
}
