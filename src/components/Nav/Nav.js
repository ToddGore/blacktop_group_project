import React from 'react';
import './Nav.css'

import Search from './../Images/search_icon.png'
import Message from './../Images/messaging_icon.svg'

export default function Nav() {
    return (
        <div>
            <div className='Nav'>
                <button className=''>
                    <img src={Search} alt='' />
                </button>
                <button className=''>
                    <img src={Message} alt='' />
                </button>
                <button className=''>
                    {/* <img src = {} alt = ''/> */}
                </button>
                <button className=''>
                    {/* <img src = {} alt = ''/> */}
                </button>
            </div>
        </div>
    )
}