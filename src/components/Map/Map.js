import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";


class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null
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

    zoomChanged(){
        console.log('zoomChanged:' + this.state.map.getZoom())
    }


    render() {
        const markers = this.props.markers || [];

        return (

            <GoogleMap
                onZoomChanged = {this.zoomChanged.bind(this)}
                ref={this.mapLoaded.bind(this)}
                onDragEnd={this.mapMoved.bind(this)}
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
            >

                {markers.map((marker, index) => (

                    <Marker {...marker} />

                )
                )}

            </GoogleMap>



        );
    }
};
export default withScriptjs(withGoogleMap(Map));