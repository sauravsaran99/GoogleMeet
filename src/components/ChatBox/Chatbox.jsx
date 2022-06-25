

import { useState } from 'react';
import style from './Chatbox.module.css';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { chatboxStyling } from '../Redux/Actions/Chatbox';
import { useDispatch } from 'react-redux/es/exports';
import SendIcon from '@mui/icons-material/Send';
export const Chatbox = ({widthChange}) => {

    const dispatch = useDispatch();
    const styleElement = useSelector(store => store.ChatboxReducers.style);
    const [styling, setStylin] = useState({
        
    })

    const backtoold = () => {
        dispatch(chatboxStyling({"display": "none", "position": `absolute`,
    "right": "20px",
    "top": "20px",
    "width":"0px",
    'height': `84%`}));

    widthChange({"width": `100%`,
    "display": "grid",
    "gridTemplateAreas": `
    'a b c d'
    'e f g h'
    `,
    "transition": "width .2s",
       "transitionTimingFunction": "linear"
})
    }
    
    useEffect(() => {
        setStylin(styleElement);
    }, [styleElement])
    return (
        <>
        <div id={style.chatmainbox} className={style.chatmainbox} style={styling}>
            <div style={
                {
                    "display": 'flex',
                    "alignItems": 'center',
                    "justifyContent": 'space-between',
                    "padding": '15px',
                }
            }>
                <div>In-call messages</div>
                <ClearIcon onClick={backtoold}/>
            </div>

            <div  style={
                {
                    "background": "#00000011",
                    "margin": '15px',
                    "padding": "7px",
                    'textAlign': 'center',
                    "borderRadius": "5px",
                    "fontSize": "12px",
                }
            }>
            Messages can only be seen by people in the call and are deleted when the call ends
            </div>

            <div style={{
                padding: '15px',
                fontSize: '12px',
            }}><span style={{
                fontWeight: 'bold',
            }}>You </span><span> 10:05 AM</span></div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>Hii</div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>How are you?</div>

<div style={{
                padding: '15px',
                fontSize: '12px',
            }}><span style={{
                fontWeight: 'bold',
            }}>Saurav Kumar </span><span> 10:07 AM</span></div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>I'm good</div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>What about you?</div>

<div style={{
                padding: '15px',
                fontSize: '12px',
            }}><span style={{
                fontWeight: 'bold',
            }}>Xykdf kumar </span><span> 10:08 AM</span></div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>Hey everyone.</div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>I think we should start our metting</div>
            <div style={{
                padding: '0 15px',
                fontSize: '12px',
            }}>If anyone ...sfsfs kflsd</div>
            
            <div style = {{
                position: 'absolute',
                bottom: '0',
                width: '92%',
                height: '40px',
                background: '#00000011',
                margin: '15px',
                display: 'flex',
                alignItems: 'center',   
                overflow: 'hidden',
                borderRadius: '5px',
                padding: '0 7px',
            }}>
                <input type="text" style={{
                    width: '92%',
                    height: '100%',
                    border: 'none',
                    background: 'none',
                    outline: "none",
                    padding: '10px',
                }}/>
                <SendIcon style={{
                    width: '8%',
                    background: 'none',
                    height: '100%',
                    padding: '0 4px',
                }}/>
            </div>
        </div>

        
        </>
    )

}