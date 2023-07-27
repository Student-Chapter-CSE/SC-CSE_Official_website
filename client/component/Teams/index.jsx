import styles from '../../styles/Team.module.css';
import TeamCards from '../TeamCards';
import { teams } from '../../assets/data';

const Teams = () => {
    return (
        <>
            <div className={styles.team_container}>
                <div className={styles.team_header}>
                    Teams
                </div>



                {teams.map((team, idx) => (
                    <div className={styles.each_team_wrap} key={idx}>

                        <div className={styles.each_header}>
                            {team.title}
                        </div>

                        <div className={styles.team_cards}>
                            {team.members.map((member, idx) => (
                                <TeamCards
                                    key={idx}
                                    img={member.img}
                                    name={member.name}
                                    desg={member.desg}
                                    socials={member.socials}
                                />
                            ))}
                        </div>

                    </div>
                ))}


            </div>
        </>
    );
};

export default Teams;
