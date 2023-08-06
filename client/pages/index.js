/* ------------- Components Import ------------------ */
import Header from '../component/Header';
import Hod from '../component/Hod';
import Navbar from '../component/Navbar';
import UpcomingEvents, { generateDummyEvents } from '../component/Upcoming';
import Testimonial from '../component/Testimonials';
import About from '../component/About';
/* ------------------------------------------------- */
import testimonialCards from '../assets/data';

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Counter from '../component/Counter';
import Footer from '../component/Footer';

export default function Home() {
    const dummyEvents = generateDummyEvents(3)

    return (
        <>
            <Head>
                <title>Students' Chapter CSE</title>
                <meta
                    name="keywords"
                    content="students' Chapter CSE, SCCSE, SC CSE"
                />
                <meta
                    name="description"
                    content="The ofiicial website of students' chapter cse"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className={styles.container}>
                <div><Navbar /></div>
                <div><Header /></div>
                <div className={styles.sectionHolder}><Counter /></div>
                <div className={styles.sectionHolder}><Hod /></div>
                <div className={styles.sectionHolder}><About /></div>
                <div className={styles.sectionHolder}><UpcomingEvents events={dummyEvents} /></div>
                <div><Footer /></div>
            </div>

            <style>
                {`
                    .swiper-button-next {
                        margin: 0 30px;
                        color: black;
                        font-weight: 600;
                    }
                    .swiper-button-prev {
                        margin: 0 30px;
                        color: black;
                        font-weight: 600;
                    }
                    .swiper-button-disabled{
                        display: none;
                    }
                `}
            </style>
        </>
    );
}
