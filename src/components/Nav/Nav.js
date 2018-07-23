import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Popup from './Popup'

import Search_icon from './../Images/yellow_search.svg'
import Message_icon from './../Images/003-chat.svg'
import Schedule_icon from './../Images/004-calendar.svg'
import Menu_icon from './../Images/Menu_icon.svg'
import styled from 'styled-components'
// import { prependOnceListener } from 'cluster';





export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popup: false
        }
        this.handlePopup = this.handlePopup.bind(this)
        this.setFalse = this.setFalse.bind(this)
    }

    handlePopup() {
        this.setState({ popup: !this.state.popup })
    }
    setFalse() {
        this.setState({ popup: false })
    }

    render() {
        return (
            <div>
                <NavCSS>
                    <Link to='/search'><img src={Search_icon} alt='' onClick={this.setFalse} /></Link>
                    <Link to='/messages'><img src={Message_icon} alt='' onClick={this.setFalse} /></Link>
                    <Link to='/reservations'><img src={Schedule_icon} alt='' onClick={this.setFalse} /></Link>
                    <img src={Menu_icon} alt='' className='Size' onClick={this.handlePopup} />
                </NavCSS>
                <Popup handlePopup={this.state.popup} />
            </div>
        )
    }
}


const NavCSS = styled.div`
    height: 55px;
    width: 100%;
    background-color: ${props => props.theme.primaryBlack};
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    z-index: 10;
    img {
        height: 50px;
        width: 50px;
        padding: 3px 10px 3px 10px;
        color: white;
        
    }

`;
