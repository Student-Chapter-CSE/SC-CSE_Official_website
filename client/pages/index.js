import Header from '../component/Header';
import Navbar from '../component/Navbar';
import UpcomingEvents from '../component/upcoming';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Students' Chapter CSE</title>
                <meta
                    name="keywords"
                    content="students' Chapter CSE, SCCSE, SC CSE"
                />
                <meta
                    name="description"
                    content="The ofiicial website of students' chapter cse"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=7" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Header />
                <UpcomingEvents />
            </div>
        </>
    );
}
