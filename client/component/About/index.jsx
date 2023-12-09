import styles from '../../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.holder}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.head}>
                        About Us
                    </div>
                    <div className={styles.welcomeText}><div>Welcome to the</div> <div>IEI Students' Chapter CSE</div>
                    <div className={styles.aot}>
                        Academy of Technology
                    </div>
                    </div>
                </div>
                <div className={styles.text}>
                    <P> Hey Folks, we are a college community, committed to promoting knowledge and values to people who look up to us! We work together, to gain skills and enjoy our college life by participating in events and doing something productive!
                    </P>

                    <P>
                        Our <Imp styleIndex='1'>Tech Team</Imp> promotes development and innovation. Consisting of talented and enthusiastic students, we actively engage in learning new technologies and applying them for the betterment of ourselves and Students' Chapter!
                    </P>
                    <P>
                        The <Imp styleIndex={1}>Public Relations (PR) Team</Imp> ensures effective communication and outreach within the student community and beyond. We are proud to have a PR Team with a variety of skills and plethora of qualities!
                    </P>

                    
                    <P>Our <Imp styleIndex={1}>Design Team</Imp> helps us in various types of design, be it UI/UX or swags, captions, posters. The members of this team are really enthusiastic about working together in a community!
                    </P>

                    <P>
                        Students' Chapter CSE, is currently headed, by its convenor, <Imp styleIndex={1}>Aratrik Bandyopadhyay</Imp> and a fantastic management team of around 10 members. We have organised few brilliant events like <Imp styleIndex={1}>Technocruise</Imp> and <Imp styleIndex={1}>Stride</Imp>. Our flagship event <Imp styleIndex={1}>InterHacktive</Imp> was an online hackathon held for over 40 hours. It has been widely regarded, as one of the best events of last year, even by administrations of other colleges!
                    </P>
                </div>
            </div>
        </div>
    )
}

function Imp({ children, styleIndex = 0 }) {
    return <b className={styles.imp} data-si={styleIndex}>
        {children}
    </b>
}

function P({ children, align = 'left', styleIndex = 0 }) {
    return <p style={{ textAlign: align }}>{children}</p>
}