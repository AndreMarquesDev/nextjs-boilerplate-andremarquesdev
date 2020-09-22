/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />

            {/* {console.log('%c| 🔧 Developed by AndreMarquesDev |', 'background: #000; color: #fff;')}
            {console.log('%c| https://andremarquesdev.com |', 'background: #000; color: #fff;')} */}
        </>
    );
}

export default MyApp;
