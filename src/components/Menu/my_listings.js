import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
import './my_listings.css'
import { connect } from 'react-redux';
import { 
    getUser,
} from '../../ducks/reducer';

import coverd_parking_icon from './../newImages/covered_parking_icon.svg'
import lit_icon from './../newImages/lit_icon.svg'
import charging_icon from './../newImages/charging_icon.svg'
import camera_icon from './../newImages/camera_icon.svg'
import fence_icon from './../newImages/fence_icon.svg'
import police_icon from './../newImages/police_icon.svg'
import delete_icon from './../newImages/delete_icon.svg'
import edit_icon from './../newImages/edit_icon.svg'
import coverd_parking_icon_off from '../newImages/covered_parking_iconoff.svg'
import lit_icon_off from '../newImages/lit_iconoff.svg'
import charging_icon_off from '../newImages/charging_iconoff.svg'
import camera_icon_off from '../newImages/camera_iconoff.svg'
import fence_icon_off from '../newImages/fence_iconoff.svg'
import police_icon_off from '../newImages/police_iconoff.svg'

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
                this.setState({ mylistings: res.data })
            })
        });
    }

    handleListingUpdate(id) {        
        this.props.history.push('/mylisting/edit/' + id);
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
       let mappedlistings = this.state.mylistings.map((listing, i) => {
            return <div key={i}>
                <div className='card'> 
                    <img alt='' src={listing.pic_one} style={{ height: '150px', width: '150px' }} />
                    <img alt='' src={listing.pic_two} style={{ height: '150px', width: '150px' }} />
                    <img alt='' src={listing.pic_three} style={{ height: '150px', width: '150px' }} />
                    <img alt='' src={listing.pic_four} style={{ height: '150px', width: '150px' }} />
                    <p style={{marginTop:'30px'}}>Address: {listing.address}</p>
                    <hr/>
                    <p>Building Type: {listing.building_type}</p>
                    <hr/>
                    <p>Space Type: {listing.space_type}</p>
                    <hr/>
                    <p>Number of Spaces: {listing.num_spaces}</p>
                    <hr/>
                    <p>Space Size: {listing.space_size}</p>
                    <hr/>
                    <p>About: {listing.about}</p>
                    <hr/>
                    <p>Instructions: {listing.instructions}</p>
                    <hr/>
                    <p>Price: ${listing.price}</p>
                    <hr/>
                    <div className='card'>
                        <h1 style={{textAlign:'center'}}>Features</h1>
                        <hr/>
                        <div className='grid'>
                            <div>
                            {listing.covered ? 
                            <div className='featureicon'><img alt='' src={coverd_parking_icon} className='mylistingicon'/>Covered</div> 
                            : <div className='featureicon'><img alt='' src={coverd_parking_icon_off} className='mylistingicon'/>Covered</div>}
                            </div>
                            <div>
                            {listing.lit ? 
                            <div className='featureicon'><img alt='' src={lit_icon} className='mylistingicon'/>Lit</div>
                            : <div className='featureicon'><img alt='' src={lit_icon_off} className='mylistingicon'/>Lit</div>}
                            </div>
                            <div>
                            {listing.charging ? 
                            <div className='featureicon'><img alt='' src={charging_icon} className='mylistingicon'/>Charging</div>
                            : <div className='featureicon'><img alt='' src={charging_icon_off} className='mylistingicon'/>Charging</div>}
                            </div>
                            <div>
                            {listing.camera ? 
                            <div className='featureicon'><img alt='' src={camera_icon} className='mylistingicon'/>Surveillance</div> 
                            : <div className='featureicon'><img alt='' src={camera_icon_off} className='mylistingicon'/>Surveillance</div>}
                            </div>
                            <div>
                            {listing.fenced ? 
                            <div className='featureicon'><img alt='' src={fence_icon} className='mylistingicon'/>Fenced</div> 
                            : <div className='featureicon'><img alt='' src={fence_icon_off} className='mylistingicon'/>Fenced</div>}
                            </div>
                            <div>
                            {listing.guarded ? 
                            <div className='featureicon'><img alt='' src={police_icon} className='mylistingicon'/>Security</div>
                            : <div className='featureicon'><img alt='' src={police_icon_off} className='mylistingicon'/>Security</div>}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <img style={{float: 'right', height: '25px'}} alt='' src={edit_icon} onClick={() => { this.handleListingUpdate(listing.id) }}/>
                    <img style={{height: '22px'}} alt='' src={delete_icon} onClick={() => { this.handleListingDelete(listing.id) }}/>
                    <br />
                </div>
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