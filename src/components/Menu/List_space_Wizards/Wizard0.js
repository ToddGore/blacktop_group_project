import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Nav from '../../Nav/Nav'
import './Wizard0.css'


export default class Wizard0 extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'wizard0'>
                    <h1>Where is the parking lot located?</h1>
                    <input type='' className='input'/>
                    <br/>
                    <Link to = '/wizard1'><button className='button'>Next</button></Link>  
                </div> 
            </div>
        )
    }
}