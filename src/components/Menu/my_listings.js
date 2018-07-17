import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import './my_listings.css'

export default class Mylistings extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'mylistings'>mylistings</div> 
            </div>
        )
    }
}