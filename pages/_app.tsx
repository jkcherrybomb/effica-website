import type {AppProps} from 'next/app';
import Layout from '../components/Layout';
import {ThemeProvider} from 'styled-components';
import EfficaTheme from '../styles/theme';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={EfficaTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
export default MyApp;
