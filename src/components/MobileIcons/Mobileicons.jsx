
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from 'react';
import style from './Mobileicons.module.css';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux/es/exports';
import { mobileDisplay } from '../Redux/Actions/Mobile';
import { chatboxStyling } from '../Redux/Actions/Chatbox';
import { peopleStyling } from '../Redux/Actions/Chatbox';


export const Mobileicons = () => {

    const dispatch = useDispatch();
    const displayValue = useSelector(store => store.MobileReducers.display);

    const [getDisplay, setDisplay] = useState(displayValue);

    useEffect(() => {
        setDisplay(displayValue);

    }, [displayValue])
    

    const peopleFunction = () => {
        dispatch(peopleStyling({
            "borderRadius": "5px",
            'height': `84%`,
            "background": '#fff',
            "position": `absolute`,
            "right": "20px",
            "top": "20px",
            "transition": "width .2s",
            "transitionTimingFunction": "linear"
               }));

        dispatch(mobileDisplay('none'));
    }

    const callFunction = () => {
        dispatch(chatboxStyling({
            "borderRadius": "5px",
            'height': `84%`,
            "background": '#fff',
            "position": `absolute`,
            "right": "20px",
            "top": "20px",
            "transition": "width .2s",
            "transitionTimingFunction": "linear"
               }));

               dispatch(mobileDisplay('none'))
    }
    return (
        <>
        <div className={style.mobilemainbox} style={{
            "display": `${getDisplay}`
        }}>
             <CloseIcon onClick={() => dispatch(mobileDisplay('none'))} style={{
                "position": "absolute",
                "right": "10px",
                "top": "10px"
            }}></CloseIcon>
        <div className={style.mobilestyling}>
                <InfoIcon></InfoIcon>
                <div style={{
                "paddingLeft": "30px"
                }}>Meeting details</div>
            </div>
            <div className={style.mobilestyling}>
                <PeopleOutlineIcon></PeopleOutlineIcon>
                <div onClick={peopleFunction} style={{
                "paddingLeft": "30px"
                }}>People</div>
            </div>
            <div className={style.mobilestyling}>
                <ChatIcon></ChatIcon>
                <div onClick={callFunction} style={{
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