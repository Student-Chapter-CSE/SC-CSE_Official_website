'use client'

import Link from 'next/link';

import DateElement from '../../../component/Date';
import SponsorList from '../../../component/Sponsor';
import { EVENTS } from '../../../data'
import styles from '../../../styles/events/Interhacktive.module.css'
import useMediaQuery from '../../../hooks/useMediaQuery'

import { ArrowDown, CalendarCheck, LinkedinLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import Circle from '../../../Global/Circle';
import Prizes from '../../../Global/Prizes';


const Interhacktive = () => {
    const event = EVENTS?.techquisitive5;
    const prize = event?.prizes;
    const sponsor = event?.sponsors;
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
                    <img src="/static/assets/techlogo.png" className={styles.image} alt='techquisitive'></img>
                </div>

                <div className={styles.section}>
                    <a className={styles.registerBtn} href={event?.registrationLink} target='_blank'>Register</a>
                </div>

                <div className={`${styles.normalTxt} ${styles.section}`}>
                    <p>The biggest event in the history of Students&apos; Chapter AOT,Techquisitive Season 5 make the participants more inquisitive about technology and development as this is not just one or two events, but a combo of events, combining coding, gaming and quiz, in a grand way!</p>
                </div>
                <div className={styles.sponsorListHeading}>
                    Prizes
                </div>

                {
                    prize.map((pz,id)=>(
                        <Prize key={id} {...pz} />
                       
                    ))
                    
                }
                

                <div className={styles.sponsorListHeading}>
                Track Details
                </div>
                <CircleDiv event={sponsor} />
                

                
                

               
               
                <div style={{marginTop:'2vw'}} className={styles.section}>
                    <SponsorSection sponsors={event?.sponsors} />
                </div>

                

                
            </div>
        </div>
    )
}

const Prize = ({image, num,amt}) => {
    return(
        <div>
            <Prizes img={image} num={num} amt={amt} />
        </div>
    )
}

const CircleDiv=({event})=>{
    console.log(event);
    return(
        <div style={{display:'flex',gap:'3vw'}}>
            {
                event.map((ev,id)=>(
                    <Circle key={id} {...ev} />
                ))
            }
        </div>
    )
}



const SponsorSection = ({ sponsors }) => {
    return (
        <div className={styles.sponsorListSection}>
            
            
            <div>  
            <a className={styles.registerBtn} target='_blank'>Girls Track</a>
            <a className={styles.registerBtn} target='_blank'>Freshers Track</a>
            <a className={styles.registerBtn}  target='_blank'>Versatile track</a>
            </div>
        </div>
    )
}

const Person = ({ name, dpUrl = '/static/assets/avatar.png', linkedIn }) => {
    return (
        <div className={styles.person}>
            <div className={styles.personDp}><img src={dpUrl} alt='dp' /></div>
            <div className={styles.personInfo}>
                <div className={styles.personName}>{name}</div>

                <Link href={linkedIn} target='_blank' className={styles.personSocial}>
                    <LinkedinLogo width='1.5em' height='1.5em' />
                    <div>LinkedIn</div>
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
