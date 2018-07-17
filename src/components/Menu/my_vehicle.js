import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import './my_vehicle.css'

export default class Myvehicle extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'myvehicle'>Myvehicle</div> 
            </div>
        )
    }
}