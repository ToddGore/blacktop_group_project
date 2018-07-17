import React from 'react';
import { Link } from 'react-router-dom'

import Search_icon from './../Images/Search_icon.svg'
import Message_icon from './../Images/Message_icon.svg'
import Schedule_icon from './../Images/Schedule_icon.svg'
import Menu_icon from './../Images/Menu_icon.svg'

export default function Nav() {
    return (
        <div>
            <div className='Nav'>
                <Link><li href=''><img src={Search_icon} alt='' className='Size' /></li></Link>
                <Link><li href=''><img src={Message_icon} alt='' className='Size' /></li></Link>
                <Link><li href=''><img src={Schedule_icon} alt='' className='Size' /></li></Link>
                <Link><li href=''><img src={Menu_icon} alt='' className='Size' /></li></Link>
            </div>
        </div>
    )
}