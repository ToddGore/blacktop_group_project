import React from 'react';
import './../../animate.css'
import blacktop from './../newImages/BlackTop.png'

require('dotenv').config();



export default function Login() {
    return (
        <div>
            <div className='reset loginmain'>
                <a id='loginanimation' className='login animated zoomInDown'href={process.env.REACT_APP_LOGIN}>
                    <img src={blacktop} style={{height: '70px', margin:'10px'}} alt=''/>
                </a>
            </div>
        </div>
    )
}


