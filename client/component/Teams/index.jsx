import styles from '../../styles/Team.module.css';
import TeamCards from '../TeamCards';

const Teams = () => {
    return (
        <>
            <div className={styles.team_container}>
                <div className={styles.team_header}>
                    Teams
                </div>

                <div className={styles.each_team_wrap}>

                    <div className={styles.each_header}>
                        Tech Team
                    </div>

                    <div className={styles.team_cards}>
                        <TeamCards />
                        <TeamCards />
                        <TeamCards />

                    </div>
                </div>

            </div>
        </>
    );
};

export default Teams;
