import React, { Component } from 'react';
import axios from 'axios'

import Nav from './../Nav/Nav'
import './my_listings.css'

export default class Mylistings extends Component {
    constructor(){
        super()

        this.state = {
            mylistings: [],
            id: 2
        }
    }

    componentDidMount(){
        let id = this.state.id
        axios.get(`/api/listing/${id}`).then(res => {
            this.setState({mylistings: res.data})
        })
    }


    render() {
        let mappedlistings = this.state.mylistings.map((e,i) => (
            <div key = {i}>
                <p>Display Username?</p>
                <hr/>
                <p>Address: {e.address}</p>
                <p>Building Type: {e.building_type}</p>
                <p>Space Type: {e.space_type}</p>
                <p>Number of Spaces: {e.num_spaces}</p>
                <p>Space Size: {e.space_size}</p>
                <p>About: {e.about}</p>
                <p>Instructions: {e.instructions}</p>
                <p>Price: ${e.price}</p>
                <hr/>
                <p>Covered: {e.covered.toString()}</p>
                <p>Lit: {e.lit.toString()}</p>
                <p>Charging: {e.charging.toString()}</p>
                <p>Camera: {e.camera.toString()}</p>
                <p>Fenced: {e.fenced.toString()}</p>
                <p>Guarded: {e.guarded.toString()}</p>
                <hr/>
                <img alt = '' src = {e.pic_one} style = {{height: '150px', width:'150px'}}/> 
                <img alt = '' src = {e.pic_two} style = {{height: '150px', width:'150px'}}/>
                <img alt = '' src = {e.pic_three} style = {{height: '150px', width:'150px'}}/>
                <img alt = '' src = {e.pic_four} style = {{height: '150px', width:'150px'}}/>
            </div>
        ))
        return (
            <div>
                <Nav/>
                <div className = 'mylistings'>
                {mappedlistings}
                </div> 
            </div>
        )
    }
}