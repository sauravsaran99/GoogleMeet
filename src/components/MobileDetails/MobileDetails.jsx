

import ChatIcon from '@mui/icons-material/Chat';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import style from '../MobileDetails/MobileDetails.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MobileDetails } from '../Redux/Actions/Secondbox';

export const Mobiledetails = () => {

    const dispatch = useDispatch();
    const mobileDisplay = useSelector(store => store.secondBox.mobile);

    const [dis, setDis] = useState('none');

    useEffect(() => {
        setDis(mobileDisplay);
    }, [mobileDisplay]);

    return (
        <>
         <div className={style.footerthirdbox} style={
            {
                "display": `${dis}`
            }
         }>

<li>
                <InfoIcon style={{
                        "color": "black",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></InfoIcon>
                    <div className={style.mobiledetailsfeatures}>Metting details</div>
                    <div className={style.mobiledetailscross}>
            <CloseIcon onClick={() => dispatch(MobileDetails('none'))}></CloseIcon>
            </div>
            </li>

            <li>
                <ChatIcon style={{
                        "color": "black",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></ChatIcon>
                    <div className={style.mobiledetailsfeatures}>In-call messages</div>
            </li>

            <li>
                <PeopleOutlineIcon style={{
                        "color": "black",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></PeopleOutlineIcon>
            
            <div className={style.mobiledetailsfeatures}>People</div></li>
            
            
            <li>
                <CategoryIcon style={{
                        "color": "black",
                        "width": "43px",
                        "height": "43px",
                        "borderRadius": "50%",
                        "padding": "9px"
                    }}></CategoryIcon>
            <div className={style.mobiledetailsfeatures}>Activities</div></li>
            
            
            
        </div>
        </>
    )
}