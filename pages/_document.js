import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);

        return {
            ...initialProps,
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link as="font" crossOrigin="true" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="preload" type="font/ttf" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
