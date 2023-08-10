'use client'

import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation'

const LINKS = [
    {href: "/", name: "home"},
    {href: "/team", name: "team"},
    {href: "/events", name: "events"}
]


const DeskTopNavbar = () => {
    const [shouldMorph, setMorph] = useState(true);
    const pathName = usePathname();
    
    useEffect(() => {
        const trigger = document.createElement('div');
        trigger.style.position = 'absolute';
        trigger.style.top = '0';
        trigger.style.height = '100vh';
        document.body.appendChild(trigger);

        const o = new IntersectionObserver(([e]) => {
            setMorph(!e.isIntersecting);
        });

        o.observe(trigger);
        return () => o.unobserve(trigger);
    }, []);



    return (
        <>
            <div className={styles.NavbarContainer} data-morphed={shouldMorph}>
                <div className={styles.NavLogoContainer}>
                    <div className={styles.NavLogo}>Student's Chapter</div>
                    <p className={styles.Navlogopara}>CSE</p>
                </div>
                <div className={styles.NavMid}>
                    {
                        LINKS.map((l, i) => (
                            <div key={i} className={styles.NavElement} data-active={pathName == l.href}>
                                <Link href={l.href}>{l.name}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.Navleft}>
                    <Link href="/register" className={styles.Navbtn}>
                        Become a member
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DeskTopNavbar;
