import styles from '../../styles/Navbar.module.css';
const DeskTopNavbar = () => {
    return (
        <>
            <div className={styles.NavbarContainer}>
                <div className={styles.NavLogoContainer}>
                    <div className={styles.NavLogo}>Student's Chapter</div>
                    <p className={styles.Navlogopara}>CSE</p>
                </div>
                <div className={styles.NavMid}>
                    <div className={styles.NavElement}>HOME</div>
                    <div className={styles.NavElement}>TEAM</div>
                    <div className={styles.NavElement}>GALLERY</div>
                    <div className={styles.NavElement}>EVENTS</div>
                </div>
                <div className={styles.Navleft}>
                    <button className={styles.Navbtn}>Become a member</button>
                </div>
            </div>
        </>
    );
};

export default DeskTopNavbar;
