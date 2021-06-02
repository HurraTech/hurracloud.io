import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import NProgress from 'nprogress';
import Router from 'next/router';
import { GlobalCss } from '../styles/styles';


NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(async () => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Hurra Cloud: A decentralized P2P cloud</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-G7H1DHGDRR"></script>
          <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-G7H1DHGDRR');
            `}} />
      </Head>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalCss />
        <Component {...pageProps} />
    </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};