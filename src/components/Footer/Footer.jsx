
import style from './Footer.module.css';
import { useState } from 'react';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import CategoryIcon from '@mui/icons-material/Category';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { FirstBoxImageRequest } from '../Redux/Actions/Firstboximage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Secondboxdisplay } from '../Redux/Actions/Secondbox';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Secondbox} from '../Redux/Actions/Secondbox';
import { MobileDetails} from '../Redux/Actions/Secondbox'
export const Footer = () => {
    const dispatch = useDispatch();
    const [up, setDown] = useState(true);
    
const updatingDivui = () => {
    dispatch(FirstBoxImageRequest('65%'));
    dispatch(Secondbox('block'));
    dispatch(Secondboxdisplay('35%'));
}

const updating = () => {
    dispatch(MobileDetails('block'));
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
        <div className={style.footerarrow}>
            {up ? <KeyboardArrowUpIcon onClick={updating} style={{
                "color": '#ffff'
            }}></KeyboardArrowUpIcon>: <KeyboardArrowDownIcon onClick={updating} style={{
                "color": '#ffff'
            }}></KeyboardArrowDownIcon>}
        </div>
        <div className={style.footerthirdbox}>
        
        <li onClick={updatingDivui}>
                <LockIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></LockIcon>
            </li>
            
            <li onClick={updatingDivui}>
                <CategoryIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></CategoryIcon>
            </li>
            <li onClick={updatingDivui}>
                <ChatIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></ChatIcon>
            </li>
            <li onClick={updatingDivui}>
                <PeopleOutlineIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></PeopleOutlineIcon>
            </li>
            <li onClick={updatingDivui}>
                <InfoIcon style={{
                        "color": "white",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></InfoIcon>
            </li>
        </div>
        </div>
        </>
    )
}