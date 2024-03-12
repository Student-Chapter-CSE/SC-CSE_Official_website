'use client';

import Link from 'next/link';

import DateElement from '../../../component/Date';
import SponsorList from '../../../component/Sponsor';
import { EVENTS } from '../../../data';
import styles from '../../../styles/events/techquisitive.module.css';
import useMediaQuery from '../../../hooks/useMediaQuery';

import { ArrowDown, CalendarCheck, LinkedinLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import Prizes from '../../../Global/Prizes';

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
                        quiz, in a grand way!
                    </p>
                </div>

                <h1 className="font-bold text-5xl mt-8 mb-16 text-white">
                    EVENT SCHEDULE
                </h1>
                {/* EXPERIENCE LIST */}
                <div className="">
                    {/* EXPERIENCE LIST ITEM */}
                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                REGISTRATION OPEN
                            </div>
                            {/* JOB DESC */}
                            {/* <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div> */}
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                1ST MARCH 2024
                            </div>
                            {/* JOB COMPANY */}
                        </div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 "></div>
                    </div>
                    {/* EXPERIENCE LIST ITEM */}
                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 "></div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                REGISTRATION ENDS
                            </div>
                            {/* JOB DESC */}
                            {/* <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div> */}
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                10TH MARCH 2024
                            </div>
                            {/* JOB COMPANY */}
                        </div>
                    </div>
                    {/* EXPERIENCE LIST ITEM */}
                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                PRELIMS(QUIZ EVENT){' '}
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-lg text-white italic">
                                OFFLINE PRELIMINARIES,VIA QUIZZ,IN A FIERCELY
                                COMPETITIVE EVENT{' '}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                19TH MARCH 2024{' '}
                            </div>
                        </div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 "></div>
                    </div>

                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 "></div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                CXTGSENSE 1.0
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-lg text-white italic">
                                CODING CONTEST FOR ONLY FIRST YEAR.{' '}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                20TH MARCH 2024
                            </div>
                            {/* JOB COMPANY */}
                        </div>
                    </div>

                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                CXTGSENSE 2.0{' '}
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-lg text-white italic">
                                CODING CONTEST FOR SECOND AND THIRD YEAR.{' '}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                21TH MARCH 2024{' '}
                            </div>
                        </div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 "></div>
                    </div>

                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 "></div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                HEADSHOT
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-lg text-white italic">
                                BGMI GAMING EVENT(ONLINE EVENT){' '}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                22TH MARCH 2024
                            </div>
                            {/* JOB COMPANY */}
                        </div>
                    </div>

                    <div className="flex justify-between h-48">
                        {/* LEFT */}
                        <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                GRAND FINALE{' '}
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-lg text-white italic">
                                REALITY GAMESHOW INFRONT OF LIVE AUDIENCE{' '}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                23TH MARCH 2024{' '}
                            </div>
                        </div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 "></div>
                    </div>
                </div>
            </div>

            <div className={styles.prizeHeading}>Prizes</div>

            <div className={styles.cardContainer}>
                {prize.map((prize, id) => (
                    <BigCard
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

        // </div>
    );
};

const Prize = ({ image, num, amt }) => {
    return (
        <div>
            <Prizes img={image} num={num} amt={amt} />
        </div>
    );
};

export default Techquisitive;
