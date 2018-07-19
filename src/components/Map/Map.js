import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");


class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null,
            searchBox: null,
            center: {
                lat: 33.64,
                lng: -117.91
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

    onSearchBoxMounted(searchBox){
        if(this.state.searchBox !== null){
            return;
        }
        this.setState({
            searchBox: searchBox
        })
    }

    onPlacesChanged(){
        console.log('OnPlacesChanged:' + this.state.searchBox.getPlaces());
        console.log(this.state.searchBox.getPlaces());
        const places = this.state.searchBox.getPlaces();
        console.log(places[0].geometry.location.lat(), places[0].geometry.location.lng);

        this.setState({
            center: {
            lat:places[0].geometry.location.lat(),
            lng:places[0].geometry.location.lng()
        }
    })
}


    render() {
        const markers = this.props.markers || [];

        return (
            <div>

                <StandaloneSearchBox
                    ref={this.onSearchBoxMounted.bind(this)}
                    bounds={this.props.bounds}
                    onPlacesChanged={this.onPlacesChanged.bind(this)}
                >
                    <input
                        type="text"
                        placeholder="Customized your placeholder"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </StandaloneSearchBox>

                <GoogleMap
                    onZoomChanged={this.zoomChanged.bind(this)}
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    center={this.state.center}
                >

                    {markers.map((marker, index) => (

                        <Marker {...marker} />

                    )
                    )}
                </GoogleMap>

            </div>
        );
    }
};
export default withScriptjs(withGoogleMap(Map));