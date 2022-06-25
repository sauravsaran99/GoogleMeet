
import style from './Footer.module.css';
// import { useState } from 'react';
import MicOffIcon from '@mui/icons-material/MicOff';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux/es/exports';
import CategoryIcon from '@mui/icons-material/Category';
import LockIcon from '@mui/icons-material/Lock';
import { chatboxStyling } from '../Redux/Actions/Chatbox';
import { peopleStyling } from '../Redux/Actions/Chatbox';
import { mobileDisplay } from '../Redux/Actions/Mobile';
import { useSelector } from 'react-redux/es/exports';
import { useEffect, useState } from 'react';
export const Footer = ({widthChange}) => {
    const dispatch = useDispatch();
    const displayValue = useSelector(store => store.MobileReducers.display);
    const [upArrow, setDown] = useState(true);

    useEffect(() => {
        if(displayValue === 'none'){
            setDown(true);
        }
    }, [displayValue])
    const changeStyling = () => {
        widthChange(
            {
               "width": `70%`,
                       "display": "grid",
                       "gridTemplateAreas": `
                       'a a b b c c'
                       'd d e e f f'
                       '. g g h h .
                       `,
                       "transition": "width .2s",
       "transitionTimingFunction": "linear"
           }
       );

       dispatch(peopleStyling({"display": "none", "position": `absolute`,
       "right": "20px",
       "top": "20px",
       "width":"0px",
       'height': `84%`}));

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
    }

    const popleStyle = () => {
        widthChange(
            {
               "width": `70%`,
                       "display": "grid",
                       "gridTemplateAreas": `
                       'a a b b c c'
                       'd d e e f f'
                       '. g g h h .'
                       `,
                       "transition": "width .2s",
       "transitionTimingFunction": "linear"
           }
       );

       dispatch(chatboxStyling({"display": "none", "position": `absolute`,
       "right": "20px",
       "top": "20px",
       "width":"0px",
       'height': `84%`}))

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
    }

    const mobileDisplayShow = () => {
        if(upArrow){
            setDown(false);
        } else {
            setDown(true);
        }

        dispatch(mobileDisplay('block'));
    }

    return (
        <>
        <div className={style.footermainbox}>
        <div className={`${style.footerfirstbox} ${style.hide}`}>
        10:15 PM | dzw-qgno-qwu
        </div>
        <div className={style.footersecondbox}>
            <ul className={style.footerlist}>
                <li>
                        <MicOffIcon style={{
                        "backgroundColor": "rgb(234,67,53)",
                        "color": "white",
                        "width": "38px",
                        "height": "38px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></MicOffIcon>
                </li>
                <li>
                    <VideocamOffIcon style={{
                        "backgroundColor": "rgb(234,67,53)",
                        "color": "white",
                        "width": "38px",
                        "height": "38px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></VideocamOffIcon>
                </li>
                <li>
                    <ClosedCaptionOffIcon style={{
                        "backgroundColor": "rgb(91,94,97)",
                        "color": "white",
                        "width": "38px",
                        "height": "38px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></ClosedCaptionOffIcon>
                </li>
                <li>
                    <PresentToAllIcon style={{
                        "backgroundColor": "rgb(91,94,97)",
                        "color": "white",
                        "width": "38px",
                        "height": "38px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></PresentToAllIcon>
                </li>
                <li>
                    <MoreVertIcon style={{
                        "backgroundColor": "rgb(91,94,97)",
                        "color": "white",
                        "width": "38px",
                        "height": "38px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></MoreVertIcon>
                </li>
                <li>
                    <CallEndIcon style={{
                        "backgroundColor": "rgb(234,67,53)",
                        "color": "white",
                        "width": "54px",
                        "height": "38px",
                        "borderRadius": "100px",
                        "padding": "5px"
                    }}></CallEndIcon>
                </li>
            </ul>
        </div>
        <div className={style.footerthirdbox}>
        
        <li>
                <LockIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></LockIcon>
            </li>
            
            <li>
                <CategoryIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></CategoryIcon>
            </li>
            <li>
                <ChatIcon onClick={changeStyling} style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></ChatIcon>
            </li>
            <li>
                <PeopleOutlineIcon onClick={popleStyle} style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></PeopleOutlineIcon>
            </li>
            <li>
                <InfoIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></InfoIcon>

            </li>
        </div>
        <div className={style.footerarrow}>{upArrow?<KeyboardControlKeyIcon onClick={mobileDisplayShow}></KeyboardControlKeyIcon>:<KeyboardArrowDownIcon onClick={mobileDisplayShow}></KeyboardArrowDownIcon>}</div>
        </div>
        </>
    )
}