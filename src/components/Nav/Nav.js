<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom'
=======
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Popup from './Popup'
>>>>>>> master

import Search_icon from './../Images/Search_icon.svg'
import Message_icon from './../Images/Message_icon.svg'
import Schedule_icon from './../Images/Schedule_icon.svg'
import Menu_icon from './../Images/Menu_icon.svg'

<<<<<<< HEAD
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
=======
export default class Nav extends Component {
    constructor(){
        super()

        this.state = {
            popup: false
        }
        this.handlePopup = this.handlePopup.bind(this)
        this.setFalse = this.setFalse.bind(this)
    }

    handlePopup(){
        this.setState({popup: !this.state.popup})
    }
    setFalse(){
        this.setState({popup: false})
    }

    render(){
        return(
            <div>
                <div className = 'Nav'>
                    <Link to = '/search'><img src = {Search_icon} alt = '' className = 'Size' onClick = {this.setFalse}/></Link>
                    <Link to = '/messages'><img src = {Message_icon} alt = '' className = 'Size' onClick = {this.setFalse}/></Link>
                    <Link to = '/reservations'><img src = {Schedule_icon} alt = '' className = 'Size' onClick = {this.setFalse}/></Link>
                    <img src = {Menu_icon} alt = '' className = 'Size' onClick = {this.handlePopup}/>
                </div> 
                <Popup handlePopup = {this.state.popup}/>
            </div>
        )
    }
>>>>>>> master
}