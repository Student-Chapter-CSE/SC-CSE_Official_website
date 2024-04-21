'use client';
import { lazy, Suspense, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

import { getUpcomingEvents } from '../data';
import Loading from './loading';
import About from '../component/About';
import Counter from '../component/Counter';
import Footer from '../component/Footer';

const Header = lazy(() => import('../component/Header'));
const Hod = lazy(() => import('../component/Hod'));
const UpcomingEvents = lazy(() => import('../component/Upcoming'));

const Home = () => {
    const [preloaderShown, setPreloaderShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloaderShown(true);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!preloaderShown && <Loading suspense={false} />}
            {preloaderShown && (
                <Suspense fallback={<Loading suspense={true}/>}>
                    <div>
                        <Header />
                    </div>
                    <div className={styles.sectionHolder}>
                        <Counter />
                    </div>
                    <div className={styles.sectionHolder}>
                        <Hod />
                    </div>
                    <div className={styles.sectionHolder}>
                        <About />
                    </div>
                    <div className={styles.sectionHolder}>
                        <UpcomingEvents events={getUpcomingEvents()} />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </Suspense>
            )}
        </>
    );
};

export default Home;