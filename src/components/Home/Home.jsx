

import { Footer } from '../Footer/Footer';
import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { Mobiledetails } from '../MobileDetails/MobileDetails';
// import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { MettingDetails } from '../MettingDetails/MettingDetails';

export const Home = () => {


    const boxSize = useSelector(store =>
        store.firstBoxImage.data);
    const displaySecondBox = useSelector(store => store.secondBox.display);
    const widthSecondBox = useSelector(store => store.secondBox.width);
    const [secondSize, setSecondSize] = useState('none');
    const [first, setSize] = useState('100%');
    const [second, setSecond] = useState('0%');

    useEffect(() => {
        setSize(boxSize);
        setSecondSize(displaySecondBox);
        setSecond(widthSecondBox);
    }, [boxSize, displaySecondBox, widthSecondBox]);

    return (
        <>
        <div className={style.homefirstbox}>
            <div className={style.firstboximage} style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "width": `${first}`,
                "backgroundColor":"rgb(32,33,36)",
                "transitionProperty": "width",
                "transitionDuration": ".1s",
  "transitionTimingFunction": "linerar",


            }}>
                <div className={style.homeuserimage}></div>
            </div>
            <div className={style.firstboxtransition} style={{
                "width": `${second}`,
                "display": `${secondSize}`,
                'backgroundColor': 'rgb(32,33,36)',
            }} >
                <MettingDetails></MettingDetails>
            </div>
        </div>
        <div className={style.homesecondbox}>
        <Footer></Footer>
        <Mobiledetails></Mobiledetails>
        </div>
        </>
    )
}