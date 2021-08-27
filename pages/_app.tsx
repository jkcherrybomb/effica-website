import type {AppProps} from 'next/app';
import Layout from '../components/Layout';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {DefaultTheme} from '../styles/theme';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Catamaran';
        font-weight: 200;
        padding-top: 65px;
        padding-bottom: 0px;
        margin: 0;
        font-size: 20px;
    }
`;

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyle />
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
export default MyApp;
