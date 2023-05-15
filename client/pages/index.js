/* ------------- Components Import ------------------ */
import Header from '../component/Header';
import Hod from '../component/Hod';
import Navbar from '../component/Navbar';
import UpcomingEvents from '../component/upcoming';
import Testimonial from '../component/Testimonials';
/* ------------------------------------------------- */
import testimonialCards from '../assets/data';


import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper'
import Counter from '../component/Counter';




export default function Home() {
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
                <meta http-equiv="X-UA-Compatible" content="IE=7" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Header />
                <Counter/>
                <Hod />

                <div className={styles.testimonials_container}>
                    <div className={styles.testimonials_heading}>Testimonials</div>
                    <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
                        {testimonialCards.map((testimonialCard) => (
                            <SwiperSlide key={testimonialCard.id}>
                                <Testimonial
                                    img={testimonialCard.img}
                                    heading={testimonialCard.heading}
                                    content={testimonialCard.content}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <UpcomingEvents />



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
