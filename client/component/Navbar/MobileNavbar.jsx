import React, { useState } from 'react';
import { X, List } from '@phosphor-icons/react';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link'
const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.Hamburger_menu}>
            <button className={styles.Hamburger_icon} onClick={handleToggle}>
                {isOpen ? (
                    <X size={32} weight="bold" color="var(--themeYellowDark)" />
                ) : (
                    <List
                        size={32}
                        weight="fill"
                        color="var(--themeYellowDark)"
                    />
                )}
            </button>

            {isOpen && (
                <div className={styles.BlurBackground}>
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
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
