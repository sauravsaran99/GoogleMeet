

// import { useEffect, useState } from 'react';
import style from './MettingDetails.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { Secondbox } from '../Redux/Actions/Secondbox';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Secondboxdisplay } from '../Redux/Actions/Secondbox';
import { FirstBoxImageRequest } from '../Redux/Actions/Firstboximage';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const MettingDetails = () => {
   const dispatch = useDispatch();
   const updatingDivui = () => {
    dispatch(FirstBoxImageRequest('100%'));
    dispatch(Secondbox('none'));
    dispatch(Secondboxdisplay('0%'));
}
    return (
        <>
        <div className={style.mettingDetailsmainbox}
        >
            <div className={style.mettingfirstbox}>
                <div>Metting details</div>
                <div onClick={updatingDivui}>
                    <CloseIcon />
                </div>
            </div>
            <div className={style.mettingsecondbox}>
                <div style={{
                    "padding": "4px 0"
                }}>Joining info</div>
                <div style={{
                    "padding": "4px 0"
                }}>https://meet.google.com/ypk-qfzm-eun</div>
                <div style={
                    {
                        "color": 'rgb(26,115,232)',
                        "alignSelf": 'center',
                        "fontSize": '15px',
                        "padding": "4px 0"
                    }
                }><span><ContentCopyIcon></ContentCopyIcon></span>Copy joining info</div>
            </div>
            <div>
                <div className={style.mettingsecondbox}>Google Calendar attachments show up here</div>
            </div>
        </div>
        </>
    )
}