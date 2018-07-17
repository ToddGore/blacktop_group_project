import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard7.css'
import Nav from '../../Nav/Nav'

export default class Wizard7 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard7'>Billing
                <br/>
                <Link to = '/wizard8'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}