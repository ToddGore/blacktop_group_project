import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Search_icon from './../Images/Search_icon.svg'
import Message_icon from './../Images/Message_icon.svg'
import Schedule_icon from './../Images/Schedule_icon.svg'
import Menu_icon from './../Images/Menu_icon.svg'

export default class Nav extends Component {
    constructor(){
        super()

        this.state = {
            popup: false
        }
        this.handlePopup = this.handlePopup.bind(this)
    }

    handlePopup(){
        this.setState({popup: !this.state.popup})
    }

    render(){
        return(
            <div>
                <div className = 'Nav'>
                <Link to = '/search'><img src = {Search_icon} alt = '' className = 'Size'/></Link>
                <Link to = '/messages'><img src = {Message_icon} alt = '' className = 'Size'/></Link>
                <Link to = '/reservations'><img src = {Schedule_icon} alt = '' className = 'Size'/></Link>
                <img src = {Menu_icon} alt = '' className = 'Size' onClick = {this.handlePopup}/>
                </div> 
            </div>
        )
    }
}