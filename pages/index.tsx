import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import TestComponent from '../components/TestComponent';

const Home: FC = () => {
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
            <TestComponent />

            {/* <h1>Test jpg</h1>
            <Image unsized src="/teste.jpg" />
            <h1>Test jpg optimized</h1>
            <Image unsized src="/teste_opt.jpg" />
            <h1>Test jpg dimensions</h1>
            <Image height="200" src="/teste.jpg" width="200" />
            <h1>Test jpg unoptimized</h1>
            <Image unoptimized height="200" src="/teste.jpg" width="200" />
            <h1>Test png</h1>
            <Image unsized src="/teste.png" />
            <h1>Test webp</h1>
            <Image unsized src="/teste.webp" /> */}

            <p>--------------------------</p>
            <p>--------------------------</p>
            <p>--------------------------</p>

            {/* <h1>Test jpg</h1>
            <img src="./teste.jpg" />
            <h1>Test jpg optimized</h1>
            <img src="./teste_opt.jpg" />
            <h1>Test png</h1>
            <img src="./teste.png" />
            <h1>Test webp</h1>
            <img src="./teste.webp" />
            <h1>Test jpg 2</h1>
            <img src={require('../public/teste2.jpg')} />
            <h1>Test jpg 2 to lqip</h1>
            <img src={require('../public/teste2.jpg?lqip')} />
            <h1>Test jpg 2 to webp</h1>
            <img src={require('../public/teste2.jpg?webp')} />
            <h1>Test jpg optimized 2</h1>
            <img src={require('../public/teste_opt2.jpg')} />
            <h1>Test png 2</h1>
            <img src={require('../public/teste2.png')} />
            <h1>Test webp 2</h1>
            <img src={require('../public/teste2.webp')} /> */}

            <style jsx>
                {`
                img {
                    width:200px;
                    height:200px;
                }
            `}
            </style>
        </div>
    );
};

export default Home;
