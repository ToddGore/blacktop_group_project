import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import './Messages.css'

export default class Messages extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'messages'>Messages</div> 
            </div>
        )
    }
}