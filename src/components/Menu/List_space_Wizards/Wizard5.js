import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard5.css'
import Nav from '../../Nav/Nav'

export default class Wizard5 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard5'>Add Pictures
                <br/>
                <Link to = '/wizard6'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}