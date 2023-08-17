import styles from '../../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.holder}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.head}>
                        About Us
                    </div>
                    <div className={styles.welcomeText}><div>Welcome to the</div> <div>IEI Students' Chapter CSE</div></div>
                </div>
                <div className={styles.text}>
                    <P>We are a thriving community of passionate tech enthusiasts, committed to promoting <Imp>innovation</Imp> and <Imp>knowledge-sharing</Imp> in the field of computer science. Our organization is structured into three dynamic teams, each playing a crucial role in creating a vibrant tech ecosystem.
                    </P>

                    <P>
                        Our <Imp styleIndex='1'>Tech Team</Imp> is at the forefront of cutting-edge development and innovation. Comprising talented and enthusiastic students, they actively engage in coding competitions, hackathons, and projects. They constantly strive to keep up with the latest trends in technology and contribute to open-source projects. The Tech Team plays a pivotal role in organizing coding contests and technical workshops for members to enhance their coding skills and stay updated with industry practices.
                    </P>
                    <P>
                        The <Imp styleIndex={1}>Public Relations (PR) Team</Imp> ensures effective communication and outreach within the student community and beyond. Comprising of Content and Social Media sub-teams, the Content Team deals with engaging articles and blog posts, showcasing the achievements and activities of our members.
                    </P>

                    <P>The <Imp styleIndex={1}>Social Media Team</Imp> takes charge of our online presence, keeping our followers informed about upcoming events, workshops, and the latest tech and entertainment news. Their efforts are instrumental in building a strong community and creating a meaningful connections among students and professionals.
                    </P>

                    <P>Our <Imp styleIndex={1}>Design Team</Imp> adds <Imp>creativity</Imp> and <Imp>aesthetics</Imp> to our social posts and our thoughts those arise within the community. They are responsible for designing visually appealing posters, banners, and promotional materials for our events. Their <Imp>eye-catching designs</Imp> reflect the spirit and energy of our organization, ensuring our activities leave a long lasting impression on participants and attendees.
                    </P>

                    <P>
                        In the past, we have successfully conducted two flagship events,&nbsp;
                        <Imp styleIndex={2}>Stride</Imp> and&nbsp;
                        <Imp styleIndex={2}>Technocruise</Imp>, in collaboration with IIT Kanpur, both of which garnered an overwhelming participation of over 1000 students combined from various institutions. These events were made possible with the dedication and the love for SC CSE of our <b>40+</b> volunteers, who played a pivotal role in ensuring their success. Additionally, in May 2023, we organized <Imp styleIndex={1}>"SUMMER OF BOOTCAMP"</Imp>, a special offline hands-on class facilitated by our own talented peers who have excelled in the field of web development. This bootcamp provided participants with valuable practical knowledge and insights into web development. Looking ahead, we are excited about the future and our plans to organize more engaging events, technical workshops, and activities that will empower students to excel in the ever-evolving world of technology. Our upcoming flagship event, <Imp styleIndex={2}>INTERHACKTIVE 1.0</Imp> , a hackathon, promises to challenge and inspire participants to unleash their creativity and problem-solving skills. We invite all tech enthusiasts to join us in our journey as we continue to explore the frontiers of technology, usher innovation, and make a lasting impact in the tech community. We never stop. We only keep growing!
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