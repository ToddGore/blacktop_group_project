import React, { Component } from 'react';
import styled from 'styled-components'
import searchBackground from '../Images/Bg.png'
import Nav from './../Nav/Nav'


export default class Reservations extends Component {
    render() {
        return (
            <ReservationsCSS>
                <Title>My Reservations</Title>
                <Nav />
            </ReservationsCSS>
        )
    }
}

const ReservationsCSS = styled.div`
    /* border: 1px solid red; */
    height: 700px;
    width: 100%;
    /* background-image: url(${searchBackground}); */
    /* color: white; */

`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    /* color: white; */
    padding: 20px 0;
`;