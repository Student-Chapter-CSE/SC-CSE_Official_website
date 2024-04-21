import Preloader from '../component/Preloader';

const Loading = ({ suspense }) => {
    return <Preloader width="600px" height="600px" suspense={suspense} />;
};

export default Loading;
