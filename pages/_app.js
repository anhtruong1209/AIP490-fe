import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 200); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    render () {
        const { Component, emotionCache = createEmotionCache(), pageProps } = this.props;
        return (
            <>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>FPT.UNI.AI</title>
                </Head>
                <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant,
                consistent, and simple baseline to
                build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </CacheProvider>
            </>
        );
    }
}
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
