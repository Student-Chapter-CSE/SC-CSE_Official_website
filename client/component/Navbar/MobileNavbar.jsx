import React, { useEffect, useState } from 'react';
import { X, List } from '@phosphor-icons/react';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link'
const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                        <li>
                            <Link href='/'>


                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/team'>


                                Team
                            </Link>

                        </li>
                        <li><Link href='/events'>


                            Events
                        </Link></li>

                        <li>
                            <Link href='/register' className={styles.BecomeAMemberMobile}>Become a member</Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default MobileNavbar;
