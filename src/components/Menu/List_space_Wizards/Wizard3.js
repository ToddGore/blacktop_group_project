import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard3.css'
import Nav from '../../Nav/Nav'

export default class Wizard3 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard3'>Features, Space Size, Instructions, Description
                <br/>
                <Link to = '/wizard4'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}