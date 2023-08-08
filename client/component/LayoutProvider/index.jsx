'use client';

import '../../styles/globals.css';
import styles from '../../styles/Home.module.css';
import { usePathname } from 'next/navigation';
import Navbar from '../Navbar';

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            <div className={styles.container}>
                <div>{pathname !== '/register' && <Navbar />}</div>
                <div>{children}</div>
            </div>
        </>
    );
};
