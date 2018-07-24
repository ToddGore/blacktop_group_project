import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import styled from 'styled-components'
import searchBackground from '../Images/Bg.png'




export default class Messages extends Component {
    constructor() {
        super()

        this.state = {
            toggle: true,
            messages: ['fakeone', 'another fake message to Todd', 'Make me more fake messages for erik hehe']
        }
    }


    render() {
        let mappedmessages1 = this.state.messages.map((e, i) => (
            <p key={i}>{e}</p>

        ))

        return (
            <ChatCSS>
                <Title>Chat</Title>
                <Nav />
                <div>
                    <button className='button' onClick={() => { this.setState({ toggle: true }) }}>Lots Im asking about</button>
                    <button className='button' onClick={() => { this.setState({ toggle: false }) }}>Lots Im hosting</button>
                    {this.state.toggle ? <div>{mappedmessages1}</div> : <div><p>Not a list</p></div>}
                </div>
            </ChatCSS>
        )
    }
}

const ChatCSS = styled.div`
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