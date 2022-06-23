

import { Footer } from '../Footer/Footer';
import style from './Home.module.css';
import { useState } from 'react';

export const Home = () => {

    const [first, setSize] = useState(1)
    return (
        <>
        <div className={style.homefirstbox}>
            <div className={style.firstboximage} style={{
                "flex": `${first}`,
                "backgroundColor":"orangered"
            }}></div>
            <div className={style.firstboxtransition}></div>
        </div>
        <div className={style.homesecondbox}>
        <Footer></Footer>
        </div>
        </>
    )
}