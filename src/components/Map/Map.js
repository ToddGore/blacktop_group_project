import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";
import map_pin_icon from './../newImages/map_pin_icon.svg'
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");


class Map extends Component {
    constructor() {
        super();
        this.state = {
            currentListing: {},
            selectedMarker: null,
            map: null,
            searchBox: null,
            center: {
                lat: 40.226294,
                lng:    -111.660776
            }
        }
    }


    mapMoved() {
        console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
    }

    mapLoaded(map) {
        // console.log('mapLoaded: ' + JSON.stringify(map.getCenter()))
        if (this.state.map != null) {
            return
        }
        this.setState({
            map: map
        })
    }

    zoomChanged() {
        console.log('zoomChanged:' + this.state.map.getZoom())
    }

    onSearchBoxMounted(searchBox) {
        if (this.state.searchBox !== null) {
            return;
        }
        this.setState({
            searchBox: searchBox
        })
    }

    onPlacesChanged() {
        console.log('OnPlacesChanged:' + this.state.searchBox.getPlaces());
        console.log(this.state.searchBox.getPlaces());
        const places = this.state.searchBox.getPlaces();
        console.log(places[0].geometry.location.lat(), places[0].geometry.location.lng());

        this.setState({
            center: {
                lat: places[0].geometry.location.lat(),
                lng: places[0].geometry.location.lng()
            }
        })
    }

    markerOnClickHandler(marker){
        console.log(marker)
        this.setState({selectedMarker: marker.id})
        this.setState({currentListing: marker})
    }

    render() {
        const markers = this.props.markers;
        // console.log(this.props.markers[0])
        return (
            <div>

                <StandaloneSearchBox
                    ref={this.onSearchBoxMounted.bind(this)}
                    bounds={this.props.bounds}
                    onPlacesChanged={this.onPlacesChanged.bind(this)}
                >
                <input
                    type="text"
                    placeholder="Search"
                    className='search'
                />
                </StandaloneSearchBox>
                <GoogleMap
                    onZoomChanged={this.zoomChanged.bind(this)}
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    center={this.state.center}
                >
                    {markers.map((marker, i) => (
                        <Marker
                        key = {i}
                        {...marker} 
                        position = {this.props.markers[i]}
                        icon = {map_pin_icon}
                        onClick = {(e)=>this.markerOnClickHandler(marker)}
                        >
                      {
                        this.state.selectedMarker===marker.id?
                            <InfoWindow>
                                <div>
                                <span>${marker.price.toFixed(2)}</span>
                                </div>
                                </InfoWindow>
                                :''
                                
                      } 
                        </Marker>
                        )
                    )}
                </GoogleMap>
                <div>
                    Listing Info
                    <p>Address: {this.state.currentListing.address}</p>
                    <p>Rate: ${this.state.currentListing.price && this.state.currentListing.price.toFixed(2)}</p>
                    <Link to = {`/listing_details/`+ this.state.currentListing.id}>
                    <button>Details</button>
                    </Link>
                </div>
            </div>
        );
    }
};
export default withScriptjs(withGoogleMap(Map));