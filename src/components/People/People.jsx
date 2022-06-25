

import style from './People.module.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux/es/exports';
import { peopleStyling } from '../Redux/Actions/Chatbox';

export const People = ({widthChange}) => {
    const dispatch = useDispatch();
    const styleElement = useSelector(store => store.ChatboxReducers.stylePeople);
    const [styling, setStylin] = useState({
        
    })

    const backtoold = () => {
        dispatch(peopleStyling({"display": "none", "position": `absolute`,
    "right": "20px",
    "top": "20px",
    "width":"0px",
    'height': `84%`}))

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
                <div>People</div>
                <ClearIcon onClick={backtoold}/>
            </div>

            {/* <div  style={
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
            </div> */}
            <div style={{
                fontSize: '12px',
                padding: '15px',
            }}>In call</div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
            <div>Metting host</div>
           </div>
           
           <div className={style.svgpic}>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#fff"
            }}/>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
            <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>

           <div className={style.popleprofile}>
            <div className={style.peopleimage}>
                <img src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png" alt="people" width="30px" height="30px"/>
            </div>

           <div>
            <div>Saurav Kumar (You)</div>
           </div>
           
           <div className={style.svgpic}>
           <MicOffIcon style={{
                "color": "#787676"
            }}/>
            <PushPinIcon style={{
                "color": "#787676"
            }}/>
            <MoreHorizIcon style={{
            transform: "rotate(90deg)",
            "color": "#787676"
            }}/>
           </div>

           </div>
           </div>
        
        </>
    )

}