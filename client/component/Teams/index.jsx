import styles from '../../styles/Team.module.css';
import TeamCards from '../TeamCards';
import { teams } from '../../data';
import { forwardRef } from 'react';

import Link from 'next/link';
import { CloudArrowDown } from '@phosphor-icons/react';

const Teams = () => {
    return (
        <>
            <div className={styles.teams_holder}>
                <div className={styles.team_container}>
                    <div className={styles.junction}><NodePointSvg color='#555' data-no-margin /></div>
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
                                                quotes={member.quotes}
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
            <div className={styles.memberListDownloadHolder}>
                <div className={styles.memberListDownload}>

                    <div className={styles.memberListDownload_Upper}>
                        <div className={styles.memberListDownload_Upper_Logo}>
                            <CloudArrowDown display='block' />
                        </div>
                        <div className={styles.memberListDownloadLink}>
                            <Link href='#'>Download</Link>
                        </div>
                    </div>
                    <div className={styles.memberListDownload_Text}>
                        <div className={styles.memberListDownload_Text_Upper}>The list of all our</div>
                        <div className={styles.memberListDownload_Text_Lower}>members.</div>
                    </div>
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



export default Teams