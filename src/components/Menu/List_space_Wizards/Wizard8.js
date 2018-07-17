import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard8.css'
import Nav from '../../Nav/Nav'

export default class Wizard8 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard8'>Payment Options (Venmo etc.)
                <br/>
                <Link to = '/search'><button className='button'>Search</button></Link>
                </div>
            </div>
        )
    }
}