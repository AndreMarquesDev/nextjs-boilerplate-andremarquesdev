import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const About: FC = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>
                    Locale:
                    {' '}
                    {router.locale}
                </title>
            </Head>
            <p>This is the about page</p>
        </div>
    );
};

export default About;
