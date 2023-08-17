import React, { useEffect, useState } from 'react';
import { X, List } from '@phosphor-icons/react';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link'

import {usePathname} from 'next/navigation'

const LINKS = [
    {name: 'Home', href: '/'},
    {name: 'Team', href: '/team'},
    {name: 'Events', href: '/events'}
]

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const urlPathname = usePathname()
    const [shouldMorph, setMorph] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

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

    useEffect(() => {
        // Hide the mobile navbar when the url changes.
        setIsOpen(false)
    }, [urlPathname])

    return (
        <div className={styles.Hamburger_menu}>
            <button className={styles.Hamburger_icon} data-morphed={shouldMorph} onClick={handleToggle}>
                {isOpen ? (
                    <X size={32} weight="bold" />
                ) : (
                    <List
                        size={32}
                        weight="fill"
                    />
                )}
            </button>

            { <div className={styles.BlurBackground} data-is-open={isOpen}>
                    <ul className={styles.Menu_items}>
                        {
                            LINKS.map((l, id) => (
                                <li key={id} 
            
                                data-active={l.href == urlPathname}
                                onClick={
                                    // Close the Navigation Bar immediately, if the 
                                    // the page pointed to by the link is the current page.
                                    () => l.href == urlPathname && setIsOpen(false)
                                }>
                                    <Link href={l.href}>{l.name}</Link>
                                </li>
                            ))
                        }

                        <li style={{marginTop: '2rem'}}>
                            <Link href='/register' className={styles.BecomeAMemberMobile}>Become a member</Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default MobileNavbar;
