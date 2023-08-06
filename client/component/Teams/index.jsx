import styles from '../../styles/Team.module.css';
import TeamCards from '../TeamCards';
import { teams } from '../../assets/data';

import { forwardRef } from 'react';

export default function Teams() {
    console.log(teams)
    return (
        <>
            <div className={styles.teams_holder}>
                <div className={styles.team_container}>
                    <div className={styles.junction}><NodePointSvg color='#555' data-no-margin/></div>
                    {teams.map((team, idx) => (
                        <div key={idx}>
                            <div className={styles.each_team_wrap} key={idx}>

                                <div className={styles.each_header}>
                                    {team.title}
                                </div>

                                <div className={styles.team_cards}>
                                    {team.members.map((member, idx) => (
                                        <div key={idx}>
                                            <TeamCards
                                                img={member.img}
                                                name={member.name}
                                                desg={member.desg}
                                                socials={member.socials}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {
                                teams.length != idx + 1 ?
                                    <div className={styles.junction}>
                                        <div className={styles.vertWire}></div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    ))}
                    <div className={styles.junction}><NodePointSvg color='#555' data-no-margin /></div>
                </div>
            </div>
        </>
    );
};



const NodePointSvg = forwardRef(function NodePointSvg({ width = '1.5rem', height = '1.5rem', color }, ref) {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" display='block' ref={ref}>
            <circle
                fill='transparent'
                stroke={color} strokeWidth='1'
                strokeDasharray="3, 3"
                cx='16' cy='16' r='14.5' />
            <circle
                fill='none'
                stroke={color}
                cx='16' cy='16' r='8' />
        </svg>
    )
})

