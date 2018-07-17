import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Wizard1.css'
import Nav from '../../Nav/Nav'

export default class Wizard1 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard1'>Building Type
                <br/>
                <Link to = '/wizard2'><button className='button'>Next</button></Link>
                </div>
            </div>
        )
    }
}