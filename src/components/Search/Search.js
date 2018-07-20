import React, { Component } from 'react';
import Map from './../Map/Map';
import Nav from './../Nav/Nav'
import './Search.css'

export default class Search extends Component {
    // constructor(){
    //     super();
    //     this.state ={
    //         markers = []
    //     }
    // }

    // componentDidMount(){
    //     this.getMarkers();
    //   }
    
    //   getTrips() {
    //     axios.get('api/markers').then(res => {
    //       this.setState({ markers: res.data })
    //     });
    //   }
      
    render() {
        var markers = [
                {
                    lat: 33.64,
                    lng: -117.9
                },

                {
                    lat: 33.645,
                    lng: -117.91    
                }
        ]


        return (
            <div>
                <Nav />
                <div className='search'>Search</div>

                <Map
                    zoom={14}
                    center={{ lat: -34.397, lng: 150.644 }}
                    markers={markers}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

            </div>
        )
    }
}
