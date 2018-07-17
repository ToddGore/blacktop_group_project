import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard2.css'
import Nav from '../../Nav/Nav'

export default class Wizard2 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard2'>Space type and How many spaces are available
                <br/>
                <Link to = '/wizard3'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}