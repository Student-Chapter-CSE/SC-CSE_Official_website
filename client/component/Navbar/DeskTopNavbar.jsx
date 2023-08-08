import styles from '../../styles/Navbar.module.css';
import Link from 'next/link'

import { useState, useEffect } from 'react';

const DeskTopNavbar = () => {

    const [shouldMorph, setMorph] = useState(true);

    useEffect(() => {

        const trigger = document.createElement('div')
        trigger.style.position = 'absolute';
        trigger.style.top = '0';
        trigger.style.height = '100vh';
        document.body.appendChild(trigger)

        const o = new IntersectionObserver(([e]) => {
            setMorph(!e.isIntersecting)
        })

        o.observe(trigger)
        return () => o.unobserve(trigger)
    }, [])

    return (
        <>
            <div className={styles.NavbarContainer} data-morphed={shouldMorph}>
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
                    <Link href='/register' className={styles.Navbtn}>Become a member</Link>
                </div>
            </div>
        </>
    );
};

export default DeskTopNavbar;
