import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard6.css'
import Nav from '../../Nav/Nav'

export default class Wizard6 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard6'>Times the spot is available
                <br/>
                <Link to = '/wizard7'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}