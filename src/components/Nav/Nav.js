import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Popup from './Popup'

// import Search_icon from './../Images/search2SVG.svg'
// import Message_icon from './../Images/chatSVG.svg'
// import Schedule_icon from './../Images/scheduleSVG.svg'
import Menu_icon from './../Images/menuSVG.svg'

import { IconSearch, IconChat, IconSchedule, IconMenu } from "../../theme/css_theme"
// import navBackground from '../Images/nav_images/tab_bar_bas.png'
// import buttonNormal from '../Images/nav_images/Normal.png'

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
        console.log('Clicked')
    }
    setFalse() {
        this.setState({ popup: false })
    }



    render() {
        return (
            <div>
                <NavCSS>
                    <Link to='/search'>
                        <IconSearch onClick={this.setFalse} />
                    </Link>
                    <Link to='/messages'>
                        <IconChat onClick={this.setFalse} />
                    </Link>
                    <Link to='/reservations'>
                        <IconSchedule onClick={this.setFalse} />
                    </Link>
                    {/* <IconMenu onClick={this.handlePopup} /> */}
                    {/* <IconMenu onClick={() => alert('Hello')} /> */}
                    <img src={Menu_icon} alt='' className='Size' onClick={this.handlePopup} />
                </NavCSS >
                <Popup handlePopup={this.state.popup} />
            </div >
        )
    }
}


const NavCSS = styled.div`
    /* border: 1px solid red; */
    height: 55px;
    width: 100%;
    background-image: url(${props => props.theme.backgroundImage});

    /* background-color: ${props => props.theme.primaryBlack}; */
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
`;
