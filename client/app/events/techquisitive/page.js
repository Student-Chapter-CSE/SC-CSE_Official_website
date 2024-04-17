'use client';

import { useRef } from 'react';
import Link from 'next/link';

import DateElement from '../../../component/Date';
import SponsorList from '../../../component/Sponsor';
import { EVENTS } from '../../../data';
import styles from '../../../styles/events/Techquisitive.module.css';
import useMediaQuery from '../../../hooks/useMediaQuery';

import { ArrowDown, CalendarCheck, LinkedinLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import Prizes from '../../../Global/Prizes';
import { motion, useScroll } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

const GlassCard = ({ image, text }) => {
    return (
        <div className={styles.glassCard}>
            <img src={image} alt="Prize" className={styles.cardImage} />
            <p className={styles.cardText}>{text}</p>
        </div>
    );
};
const BigCard = ({ image, text }) => {
    return (
        <div className={styles.bigCard}>
            <img src={image} alt="Prize" className={styles.cardImage} />
            <p className={styles.cardText}>{text}</p>
        </div>
    );
};
const Prize = ({ image, num, amt }) => {
    return (
        <div>
            <Prizes img={image} num={num} amt={amt} />
        </div>
    );
};
const Techquisitive = () => {
    const event = EVENTS?.techquisitive5;
    const prize = event?.prizes;
    const track = event?.tracks;
    const eventSchedule = event?.event;
    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.articleTitle}>{event?.heading}</div>
                </div>

                <div className={styles.eventBanner}>
                    <img
                        src="/static/assets/techlogo.png"
                        className={styles.image}
                        alt="techquisitive"
                    ></img>
                </div>

                <div className={styles.section}>
                    <a
                        className={styles.registerBtn}
                        href={event?.registrationLink}
                        target="_blank"
                    >
                        Register
                    </a>
                </div>

                <div className={`${styles.normalTxt} ${styles.section}`}>
                    <p>
                        The biggest event in the history of Students&apos;
                        Chapter AOT,Techquisitive Season 5 make the participants
                        more inquisitive about technology and development as
                        this is not just one or two events, but a combo of
                        events, combining coding, gaming and
                        quiz, in a grand way!
                    </p>
                </div>

                <Timeline />



                <div className={styles.prizeHeading}>Prizes</div>
                <div>


                    <div className={styles.cardContainer}>
                        {prize.map((prize, id) => (
                            <GlassCard
                                key={id}
                                image={prize.image}
                                text={
                                    <span className={styles.content}>
                                        {prize.num}
                                        <br />
                                        {prize.amt}
                                    </span>
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.prizeHeading}>Track Details</div>

                <div className={styles.cardContainer}>
                    {track.map((track, id) => (
                        <GlassCard
                            key={id}
                            image={track.logoUrl}
                            className={styles.cardImageone}
                            text={
                                <span className={styles.content}>
                                    {track.name}
                                    <br />
                                    {track.amt}
                                </span>
                            }
                        />
                    ))}
                </div>
            </div>


        </div>


    );
};

const Timeline = () => {

    const {
        ref: ref1,
        inView: inView1
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const {
        ref: ref2,
        inView: inView2
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const {
        ref: ref3,
        inView: inView3
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const {
        ref: ref4,
        inView: inView4
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const {
        ref: ref5,
        inView: inView5
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const {
        ref: ref6,
        inView: inView6
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const {
        ref: ref7,
        inView: inView7
    } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    // Define refs for other divs

    const variants = {
        visible: {
            opacity: 1,
            x: 0
        },
        hiddenLeft: {
            opacity: 0,
            x: -100
        },
        hiddenRight: {
            opacity: 0,
            x: 100
        }
    };


    return (
        <div className={styles.section}>
            <h1 className="font-bold text-5xl mt-8 mb-16 text-fontColor">
                EVENT SCHEDULE
            </h1>

            <div>

                <div

                    className="flex justify-between h-48">

                    <motion.div
                        ref={ref1}
                        variants={variants}

                        style={{ opacity: 0 }}
                        initial={inView1 ? "visible" : "hiddenLeft"}
                        animate={inView1 ? "visible" : "hiddenLeft"}
                        transition={{ duration: .5, ease: "easeIn" }}
                        className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            REGISTRATION OPEN
                        </div>

                        <div className="p-3 text-fontColor text-sm font-semibold">
                            1ST MARCH 2024
                        </div>

                    </motion.div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <div className="w-1/3 "></div>
                </div>

                <div
                    className="flex justify-between h-48">

                    <div className="w-1/3 "></div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <motion.div
                        ref={ref2}
                        variants={variants}
                        initial={inView2 ? "visible" : "hiddenRight"}
                        animate={inView2 ? "visible" : "hiddenRight"}
                        transition={{ duration: .5 }}
                        className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            REGISTRATION ENDS
                        </div>

                        <div className="p-3 text-fontColor text-sm font-semibold">
                            10TH MARCH 2024
                        </div>

                    </motion.div>
                </div>

                <div

                    className="flex justify-between h-48">

                    <motion.div
                        ref={ref3}
                        variants={variants}
                        initial={inView3 ? "visible" : "hiddenLeft"}
                        animate={inView3 ? "visible" : "hiddenLeft"}
                        transition={{ duration: .5 }}
                        className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            PRELIMS(QUIZ EVENT){' '}
                        </div>

                        <div className="p-3 text-lg text-white italic">
                            OFFLINE PRELIMINARIES,VIA QUIZZ,IN A FIERCELY
                            COMPETITIVE EVENT{' '}
                        </div>

                        <div className="p-3 text-textColor text-sm font-semibold">
                            19TH MARCH 2024{' '}
                        </div>
                    </motion.div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <div className="w-1/3 "></div>
                </div>

                <div

                    className="flex justify-between h-48">

                    <div className="w-1/3 "></div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <motion.div ref={ref4}
                        variants={variants}
                        initial={inView4 ? "visible" : "hiddenRight"}
                        animate={inView4 ? "visible" : "hiddenRight"}
                        transition={{ duration: .5 }} className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            CXTHSENSE 1.0
                        </div>

                        <div className="p-3 text-lg text-white italic">
                            CODING CONTEST FOR ONLY FIRST YEAR.{' '}
                        </div>

                        <div className="p-3 text-textColor text-sm font-semibold">
                            20TH MARCH 2024
                        </div>

                    </motion.div>
                </div>

                <div

                    className="flex justify-between h-48">

                    <motion.div
                        ref={ref5}
                        variants={variants}
                        initial={inView5 ? "visible" : "hiddenLeft"}
                        animate={inView5 ? "visible" : "hiddenLeft"}
                        transition={{ duration: .5 }}
                        className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            CXTHSENSE 2.0{' '}
                        </div>

                        <div className="p-3 text-lg text-white italic">
                            CODING CONTEST FOR SECOND AND THIRD YEAR.{' '}
                        </div>

                        <div className="p-3 text-textColor text-sm font-semibold">
                            21TH MARCH 2024{' '}
                        </div>
                    </motion.div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <div className="w-1/3 "></div>
                </div>

                <div

                    className="flex justify-between h-48">

                    <div className="w-1/3 "></div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <motion.div
                        ref={ref6}
                        variants={variants}
                        initial={inView6 ? "visible" : "hiddenRight"}
                        animate={inView6 ? "visible" : "hiddenRight"}
                        transition={{ duration: .5 }}
                        className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            HEADSHOT
                        </div>

                        <div className="p-3 text-lg text-white italic">
                            BGMI GAMING EVENT(ONLINE EVENT){' '}
                        </div>

                        <div className="p-3 text-textColor  text-sm font-semibold">
                            22TH MARCH 2024
                        </div>

                    </motion.div>
                </div>

                <div

                    className="flex justify-between h-48">

                    <motion.div
                        ref={ref7}
                        variants={variants}
                        initial={inView7 ? "visible" : "hiddenLeft"}
                        animate={inView7 ? "visible" : "hiddenLeft"}
                        transition={{ duration: .5 }}
                        className="w-1/3 ">

                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                            GRAND FINALE{' '}
                        </div>

                        <div className="p-3 text-lg text-white italic">
                            REALITY GAMESHOW INFRONT OF LIVE AUDIENCE{' '}
                        </div>

                        <div className="p-3 text-textColor text-sm font-semibold">
                            23TH MARCH 2024{' '}
                        </div>
                    </motion.div>

                    <div className="w-1/6 flex justify-center">

                        <div className="w-1 h-full bg-gray-600 rounded relative">

                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-fontColor bg-white -left-2"></div>
                        </div>
                    </div>

                    <div className="w-1/3 "></div>
                </div>
            </div>
        </div>
    )
}



export default Techquisitive;