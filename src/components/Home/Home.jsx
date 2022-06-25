

import { Footer } from '../Footer/Footer';
import style from './Home.module.css';
import MicOffIcon from '@mui/icons-material/MicOff';
import Radium from 'radium';
import { useState } from 'react';
import { Chatbox } from '../ChatBox/Chatbox';
import { People } from '../People/People';
import { Mobileicons } from '../MobileIcons/Mobileicons';

const Home = () => {

    const [stylingFirst, setStyling] = 
    useState({
        "width": `100%`,
                "display": "grid",
                "gridTemplateAreas": `
                'a b c d'
                'e f g h'
                `,
    })

    const styling = {
        ...stylingFirst,
        "@media and (min-width: 722px) and (max-width: 913px)": {
             'gridTemplateAreas':`
             'a a b b c c'
             'd d e e f f'
             '. g g h h .'`
            }
    }

    return (
        <>
        <div className={style.homemainbox}>
            <div id={style.homefirstbox} className={style.homefirstbox} style={styling}>
                <div className={`${style.homefirstboximage} ${style.gridfirst}`}>
                    <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>Saurav Kumar</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.gridsecond}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>Saurav Kumar</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.gridthird}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>Saurav Kumar</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.gridforth}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>Saurav Kumar</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.gridfifth}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>Saurav Kumar</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.gridsixth}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>opsfnds Saran</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.gridseven}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>ksfidsvn Kumar</div>
                </div>
                <div className={`${style.homefirstboximage} ${style.grideight}`}>
                <MicOffIcon style={
                        {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "18px",
                            background: "rgba(0, 0, 0, 0.309)",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }
                    } />
                    <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="avatar"/>
                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                    }}>Xykdf kumar</div>
                </div>
            </div>
        <Footer widthChange = { setStyling}></Footer>
        </div>
        <Chatbox widthChange = { setStyling}></Chatbox>
        <People widthChange={setStyling}></People>
        <Mobileicons></Mobileicons>
        </>
    )
}


export default Radium(Home);