import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard4.css'
import Nav from '../../Nav/Nav'

export default class Wizard4 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard4'>Street View
                <br/>
                <Link to = '/wizard5'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}