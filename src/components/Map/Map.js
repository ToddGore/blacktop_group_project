import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import map_pin_icon from './../newImages/map_pin_icon.svg'
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");



class Map extends Component {
    constructor() {
        super();
        this.state = {
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
                        />
                        )
                    )}
                </GoogleMap>
            </div>
        );
    }
};
export default withScriptjs(withGoogleMap(Map));