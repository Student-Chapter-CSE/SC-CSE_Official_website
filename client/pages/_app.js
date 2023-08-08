import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
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
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
