import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;
  
    // You can consider sharing the same emotion cache between 
    // all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
     
        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) =>
                    function EnhanceApp(props) {
                        return <App emotionCache={cache} {...props} />;
                    },
        });
        const initialProps = await Document.getInitialProps(ctx);    
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(' ')}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ));
        return {
            ...initialProps,
            emotionStyleTags,
        };
    }

    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="/images/fpt-logo.jpg"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;