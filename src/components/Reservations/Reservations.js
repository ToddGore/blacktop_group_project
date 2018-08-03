import React, { Component } from 'react';
import Nav from './../Nav/Nav'
import axios from 'axios'
import {connect} from 'react-redux'


class Reservations extends Component {
    constructor(props){
        super(props)
        this.state = {
            reservations: []
        }
    }
    componentDidMount(){
        const {user} = this.props
        axios.get(`/api/reservation/${user.id}`).then( res => {
            this.setState({
                reservations: res.data
            })
        })
    }
    render() {
        const {reservations} = this.state
        console.log(reservations)
        let mappedReservations = reservations.map((reservation, i) => {
            return (
                <div key={i}>
                    <div>
                        <p>ADDRESS: {reservation.address}</p>
                    </div> 
                    <div>
                        <p>VEHICLE: {reservation.vehicle_id}</p>
                    </div> 
                    <div>
                        <p>PAYMENT TYPE: {reservation.payment_type}</p>
                    </div> 
                    <div>
                        <p>TIME: {reservation.start_time} - {reservation.end_time}</p>
                    </div> 
                    <hr/> 
                </div>
            )
        })
        return (
            <div>
                <Nav />
                <div>
                <p>Reservations</p>
                <hr/>
                </div>
                <div>
                    {mappedReservations}
                </div>  
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Reservations)
