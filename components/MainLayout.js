import React from 'react';
import Head from "next/head";
import Link from 'next/link'
import style from '../styles/MainLayout.module.css'

const MainLayout = ({children}) => {
    return (
        <>
         <Head>
             <meta charSet={'utf-8'}/>
             <title>Home</title>
         </Head>
         <header className={style.header}>
             <ul className={style.menu}>
                 <li><Link href={'/about'}><a className={style.a}>About</a></Link></li>
                 <li><Link href={'/posts'}><a className={style.a}>Posts</a></Link></li>
                 <li><Link href={'/'}><a className={style.a}>Home</a></Link></li>
             </ul>
         </header>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainLayout;
