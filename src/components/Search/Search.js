import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'search'>Search</div> 
            </div>
        )
    }
}