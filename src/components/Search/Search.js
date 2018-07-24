import React, { Component } from 'react';
import Map from './../Map/Map';
import Nav from './../Nav/Nav'
import axios from 'axios';
import styled from 'styled-components'
import searchBackground from '../Images/Bg.png'

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
            console.log(res.data)
            this.setState({ markers: res.data })
        });
    }

    render() {



        return (
            <SearchCSS>
                <Title>Search</Title>
                <Nav />
                <Map
                    zoom={14}
                    markers={this.state.markers}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    containerElement={<div style={{ height: `400px` }} />}
                    loadingElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </SearchCSS>
        )
    }
}

const SearchCSS = styled.div`
    /* border: 1px solid red; */
    height: 700px;
    padding-top: 50px;
    width: 100%;
    background-image: url(${searchBackground});
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    padding: 10px 0;
`;