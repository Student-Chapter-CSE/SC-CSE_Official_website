import styles from '../../styles/Navbar.module.css';
import Link from 'next/link'
const DeskTopNavbar = () => {
    return (
        <>
            <div className={styles.NavbarContainer}>
                <div className={styles.NavLogoContainer}>
                    <div className={styles.NavLogo}>Student's Chapter</div>
                    <p className={styles.Navlogopara}>CSE</p>
                </div>
                <div className={styles.NavMid}>
                    <div className={styles.NavElement}>
                        <Link href='/'>

                            HOME
                        </Link>
                    </div>
                    <div className={styles.NavElement}>
                        <Link href='/team'>

                            TEAM
                        </Link>
                    </div>
                    {/* <div className={styles.NavElement}>GALLERY</div> */}
                    <div className={styles.NavElement}>
                        <Link href='/events'>

                            EVENTS
                        </Link>
                    </div>
                </div>
                <div className={styles.Navleft}>
                    <button className={styles.Navbtn}>Become a member</button>
                </div>
            </div>
        </>
    );
};

export default DeskTopNavbar;
