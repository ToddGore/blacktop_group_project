import React, { Component } from 'react'

import Nav from '../Nav/Nav'
import './my_profile.css'

export default class Myprofile extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'myprofile'>
                    <p>Profile Picture</p>
                    <p>Display Name</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                    <p></p>
                    <p></p>
                </div> 
            </div>
        )
    }
}