import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
import './my_listings.css'
import { connect } from 'react-redux';
import { 
    getUser,
} from '../../ducks/reducer';


class Mylistings extends Component {
    constructor() {
        super()
        this.state = {
            mylistings: [],
            address: '',
            buildingType:'',
            spaceType: '',
            numSpaces: 0,
            spaceSize: '',
            about: '',
            instructions: '',
            price: 0
        }
    }

    componentDidMount() {

        this.props.getUser().then(() => {

            axios.get(`/api/userlisting/${this.props.user.id}`).then(res => {
                // console.log("this is this.props.user.id", this.props.user.id)
                // console.log("this is red.data", res.data)
                this.setState({ mylistings: res.data })
                // console.log(res.data)
            })
        });
    }

    handleListingUpdate(id) {        
        this.props.history.push('mylisting/edit/' + id);
    }

    handleListingDelete(id) {
        let result = window.confirm('Are you sure you want to delete this listing?')
        if (result) {
            axios.delete('/api/listing/' + id).then(res => {
                this.componentDidMount()
            })
        }
    }



    render() {
        // console.log("this is props", this.props)
        let mappedlistings = this.state.mylistings.map((listing, i) => {
            // console.log("this is this.state", this.state)

            return <div key={i}>

                <hr />
                <br />
                <p>Address: {listing.address}</p>
                <p>Building Type: {listing.building_type}</p>
                <p>Space Type: {listing.space_type}</p>
                <p>Number of Spaces: {listing.num_spaces}</p>
                <p>Space Size: {listing.space_size}</p>
                <p>About: {listing.about}</p>
                <p>Instructions: {listing.instructions}</p>
                <p>Price: ${listing.price}</p>
                <br />

                <br />
                <p>Covered: {`${listing.covered}`}</p>
                <p>Lit: {`${listing.lit}`}</p>
                <p>Charging: {`${listing.charging}`}</p>
                <p>Camera: {`${listing.camera}`}</p>
                <p>Fenced: {`${listing.fenced}`}</p>
                <p>Guarded: {`${listing.guarded}`}</p>
                <br />

                <br />
                <img alt='' src={listing.pic_one} style={{ height: '150px', width: '150px' }} />
                <img alt='' src={listing.pic_two} style={{ height: '150px', width: '150px' }} />
                <img alt='' src={listing.pic_three} style={{ height: '150px', width: '150px' }} />
                <img alt='' src={listing.pic_four} style={{ height: '150px', width: '150px' }} />
                <br />
                <button onClick={() => { this.handleListingUpdate(listing.id) }}>Edit this listing</button>
                <button onClick={() => { this.handleListingDelete(listing.id) }}>Delete This Listing</button>
                <br />

            </div>
        })


        return (
            <div>
                <Nav />
                <div className='reset'>
                    <Link to='/wizard0'><button className='bigbutton'>Add a Listing</button></Link>
                    <br />
                    {mappedlistings}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user} = state;
    return {
        user:user
    }
}

export default connect(mapStateToProps, { getUser })(Mylistings);