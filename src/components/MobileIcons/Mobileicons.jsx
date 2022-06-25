
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from 'react';
import style from './Mobileicons.module.css';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
export const Mobileicons = () => {

    const displayValue = useSelector(store => store.MobileReducers.display);

    const [getDisplay, setDisplay] = useState(displayValue);

    useEffect(() => {
        setDisplay(displayValue);
    }, [displayValue])
    

    return (
        <>
        <div className={style.mobilemainbox} style={{
            "display": `${getDisplay}`
        }}>
            <div style={{
                "display": "flex",
                "flexDirection": "row-reverse",
            }}><CloseIcon></CloseIcon></div>
        <div className={style.mobilestyling}>
                <InfoIcon></InfoIcon>
                <div style={{
                "paddingLeft": "30px"
                }}>Meeting details</div>
            </div>
            <div className={style.mobilestyling}>
                <PeopleOutlineIcon></PeopleOutlineIcon>
                <div style={{
                "paddingLeft": "30px"
                }}>People</div>
            </div>
            <div className={style.mobilestyling}>
                <ChatIcon></ChatIcon>
                <div style={{
                    "paddingLeft": "30px"
                }}>In-call messages</div>
            </div>
            <div className={style.mobilestyling}>
                <CategoryIcon></CategoryIcon>
                <div style={{
                "paddingLeft": "30px"
                }}>Activities</div>
            </div>
        </div>
        </>
    )
}