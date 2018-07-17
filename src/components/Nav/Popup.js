import React from 'react';
import {Link} from 'react-router-dom'

import './animate.css'

export default function Popup (props){
     return(
        <div>
            <div >
                <div className = {props.handlePopup ? 'popup animated fadeInUpBig' : 'popup hiddenPU'}>
                    <Link to = '/listspace' className = 'popupbutton'><div >List a Space</div></Link>
                    <Link to = '/myvehicle' className = 'popupbutton'><div >My Vehicles</div></Link>
                    <Link to = '/myprofile' className = 'popupbutton'><div >Profile Settings</div></Link>
                </div> 
            </div> 
        </div>
     )
}