import React, { Component } from 'react';
import Map from './../Map/Map';
import Nav from './../Nav/Nav'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className = 'search'>Search</div> 

                <Map
                zoom ={14}
                center = {{lat: -34.397, lng: 150.644  }}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />

            </div>
        )
    }
}
