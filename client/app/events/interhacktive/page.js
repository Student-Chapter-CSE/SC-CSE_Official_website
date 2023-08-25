'use client'

import Link from 'next/link';

import DateElement from '../../../component/Date';
import SponsorList from '../../../component/Sponsor';
import { EVENTS } from '../../../data'
import styles from '../../../styles/events/Interhacktive.module.css'
import useMediaQuery from '../../../hooks/useMediaQuery'

import { ArrowDown, CalendarCheck, LinkedinLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

const JUDGES = [
    { name: 'Aakash Munshi', linkedIn: 'https://www.linkedin.com/in/akash-munshi/' },
    { name: 'Arnab Chatterjee', linkedIn: 'https://www.linkedin.com/in/arnab-chatterjee-9a0253187'},
    { name: 'Bisakh Neogi', linkedIn: 'https://www.linkedin.com/in/bishakh-neogi-387815205/'},
    { name: 'Irshit Mukherjee', linkedIn: 'https://www.linkedin.com/in/irshit-mukherjee-693a99219/'},
    { name: 'Jyoti Mishra', linkedIn: 'https://www.linkedin.com/in/jyotim29/' },
    { name: 'Rahul Jaiswal', linkedIn: 'https://www.linkedin.com/in/rahul-jaiswal-570042ab/' },
    { name: 'Sandip Palit', linkedIn: 'https://www.linkedin.com/in/sandip-palit/' },
    { name: 'Saswat Nayak', linkedIn: 'https://www.linkedin.com/in/saswat-nayak-a41212166/' },
    { name: 'Sayan Sengupta', linkedIn: 'https://www.linkedin.com/in/sayansenguptaa' }
]



const Interhacktive = () => {
    const event = EVENTS?.interhacktive0;

    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.articleTitle}>
                        {event?.heading}
                    </div>
                    <div className={styles.eventDate}>
                        <CalendarCheck className={styles.eventDateCalender} />
                        <DateElement date={event?.date} />
                    </div>
                </div>

                <div className={styles.eventBanner}>
                    <img src="/static/assets/ih_1.png" className={styles.image}></img>
                </div>

                <div className={styles.section}>
                    <a className={styles.registerBtn} href={event?.registrationLink} target='_blank'>Register</a>
                </div>

                <div className={`${styles.normalTxt} ${styles.section}`}>
                    <p>Unleash Your Ideas At Interhacktive, The First Intra-College Hackathon Hosted By IEI Students' Chapter CSE (AOT). Begin The Two- Part Journey By Completing Tasks Online In The First Phase And In The Second Phase, Shine At The Offline Project Demonstration. Make History At AOT As We Embark In A New Age Of Technological Brilliance! Showcase Your Creativity, Win Exciting Prizes, And Pave Your Path To Success</p>
                </div>

                <div className={styles.section}>
                    <div><DownloadBrochure /></div>
                </div>

                <div className={styles.section}>
                    <SponsorSection sponsors={event?.sponsors} />
                </div>

                <div className={styles.section}>
                    <PersonTable title='Judges' persons={JUDGES} />
                </div>
            </div>
        </div>
    )
}

const DownloadBrochure = () => {
    return (
        <a className={styles.downloadBrochure} href="/downloads/interhacktive_brochure.pdf">
            Download Brochure
            <ArrowDown />
        </a>
    )
}

const SponsorSection = ({ sponsors }) => {
    return (
        <div className={styles.sponsorListSection}>
            <div className={styles.sponsorListHeading}>
                Our Sponsors
            </div>
            <div className={styles.sponsorList}>
                <SponsorList sponsors={sponsors} />
            </div>
        </div>
    )
}




const Person = ({ name, dpUrl = '/static/assets/avatar.png', linkedIn }) => {
    return (
        <div className={styles.person}>
            <div className={styles.personDp}><img src={dpUrl} /></div>
            <div className={styles.personInfo}>
                <div className={styles.personName}>{name}</div>

                <Link href={linkedIn} className={styles.personSocial}>
                    <LinkedinLogo width='1.5em' height='1.5em' />
                    <div>Linked In</div>
                </Link>

            </div>
        </div>
    )
}

const PersonTable = ({ title, persons }) => {

    const isMedScreen = useMediaQuery('(min-width: 768px)')
    const [ceil, setCeil] = useState();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setCeil(isMedScreen ? 3 : 1)
    }, [isMedScreen])

    useEffect(() => {
        let rows = []
        for (let i = 0; i < persons.length; i += ceil) {
            const row = persons.slice(i, Math.min(i + ceil, persons.length))
            if (row.length < ceil) {
                for (let k = row.length; k < ceil; ++k) {
                    row.push(null)
                }
            }

            rows.push(row)

            setRows(rows)
        }
    }, [ceil])

    return (
        <div>
            <div className={styles.h2}>{title}</div>
            <table className={styles.personTableTable}>
                <tbody>
                    {rows.map((persons, id) => (
                        <PersonRow key={id} persons={persons} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const PersonRow = ({ persons }) => {
    return (
        <tr className={styles.personTableRow}>
            {
                persons.map((person, id) => (
                    <td key={id} className={styles.personTableCell}>
                        {person && <Person {...person} />}
                    </td>
                ))
            }
        </tr>
    )
}



export default Interhacktive
