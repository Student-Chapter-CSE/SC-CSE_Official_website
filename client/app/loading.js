'use client';

import Preloader from '../component/Preloader';
import useMediaQuery from '../hooks/useMediaQuery';

const Loading = ({ suspense }) => {
    const isDesktop = useMediaQuery('(min-width:700px)');
    const side = isDesktop ? "600px" : "300px";
    return <Preloader width={side} height={side} suspense={suspense} />
};

export default Loading;
