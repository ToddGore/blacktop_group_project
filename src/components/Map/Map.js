import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";


class Map extends Component {
    constructor() {
        super();
    }


    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >

            
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
                <Marker position={{ lat: -34.398, lng: 150.654 }} />
                <Marker position={{ lat: -34.399, lng: 150.664 }} />
            </GoogleMap>
        ));
        return (
            <div><MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /></div>
        );
    }
};
export default Map;