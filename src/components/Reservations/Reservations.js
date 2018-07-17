import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import './Reservations.css'

export default class Reservations extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'reservations'>Reservations</div> 
            </div>
        )
    }
}