import React, { Component } from 'react';
import Map from './../Map/Map';
import Nav from './../Nav/Nav'
import axios from 'axios';


export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            markers: []
        }
    }

    componentDidMount() {
        this.getListings();
    }

    getListings() {
        axios.get('api/listing').then(res => {
            this.setState({ markers: res.data })
        });
    }

    render() {



        return (
            <div>
                <Nav/>
                <div className='reset' style={{paddingTop:'42px'}}>
                    <Map
                        zoom={14}
                        markers={this.state.markers}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        containerElement={<div style={{ height: `400px` }} />}
                        loadingElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div> 
            </div>
        )
    }
}
