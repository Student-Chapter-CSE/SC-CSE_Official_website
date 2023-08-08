'use client';
import useMediaQuery from '../../hooks/useMediaQuery';
import DeskTopNavbar from './DeskTopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width:700px)');
    return <>{isDesktop ? <DeskTopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
