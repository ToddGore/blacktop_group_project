import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import Nav from './../Nav/Nav'
import './my_listings.css'
import { connect } from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Mylistings extends Component {
    constructor() {
        super()
        this.state = {
            mylistings: []
        }
    }

    componentDidMount() {
        
        this.props.getUser().then(() => {
            axios.get(`/api/userlisting/${this.props.user.id}`).then(res => {
                this.setState({ mylistings: res.data })
            })
        });
    }

    render() {
       let mappedlistings = this.state.mylistings.map((listing, i) => {
            return <div key={i}>
                <h1>Welcome to your lisings page, {this.props.user.username}</h1>
                <hr />
                <p>Address: {listing.address}</p>
                <p>Building Type: {listing.building_type}</p>
                <p>Space Type: {listing.space_type}</p>
                <p>Number of Spaces: {listing.num_spaces}</p>
                <p>Space Size: {listing.space_size}</p>
                <p>About: {listing.about}</p>
                <p>Instructions: {listing.instructions}</p>
                <p>Price: ${listing.price}</p>
                <hr />
                <p>Covered: {`${listing.covered}`}</p>
                <p>Lit: {`${listing.lit}`}</p>
                <p>Charging: {`${listing.charging}`}</p>
                <p>Camera: {`${listing.camera}`}</p>
                <p>Fenced: {`${listing.fenced}`}</p>
                <p>Guarded: {`${listing.guarded}`}</p>
                <hr />
                <img alt='' src={listing.pic_one} style={{ height: '150px', width: '150px' }} />
                <img alt='' src={listing.pic_two} style={{ height: '150px', width: '150px' }} />
                <img alt='' src={listing.pic_three} style={{ height: '150px', width: '150px' }} />
                <img alt='' src={listing.pic_four} style={{ height: '150px', width: '150px' }} />
            </div>
        })
        return (
            <div>
            <Nav/>
            <div className = 'reset'>
            <Link to='/wizard0'><button className='bigbutton'>Add a Listing</button></Link>
            <p>My listings will be displayed here</p>
            {mappedlistings}
            </div> 
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {

        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Mylistings);