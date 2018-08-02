import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {connect} from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            listing: {},
            vehicles: [],
            host: {},
            currentVehicle: 'select',
            currentPayment: 'select',
            paymentArray: [],
            startDate: moment(),
            endDate: moment(),
            total: null
        }
    }
    componentDidMount() {
        this.getListing()
        
    }
    getListing = () => {
        const {user, currentListing} = this.props
        axios.get(`/api/listing/${currentListing.id}`).then(res => {
            this.setState({
                listing: res.data[0],
            })
            this.getVehicle(user.id)
            this.updateTotal()
        })
    }
    getVehicle = (id) => {
        axios.get(`/api/vehicle/${id}`).then(res => {
            this.setState({
                vehicles: res.data,
                isLoading: false
            })
        })
    }
    handleReserve = () => {
        const {user} = this.props
        const {listing, total} = this.state
        axios.post('/api/reservation',{
            user_id: user.id,
            vehicle_id: this.state.currentVehicle,
            start_time: `${this.state.startDate._d}`.substring(0,15),
            end_time: `${this.state.endDate._d}`.substring(0,15),
            payment_type: this.state.currentPayment,
            total: total,
            listing_id: listing.id
        })
    }
    updateTotal = () => {
        const {price} = this.state.listing
        this.setState({
            total: Math.round((price * 1.13) * 100) / 100
        })
    }
    handleChangeStart = (date) => {
        this.setState({
            startDate: date
        })
    }
    handleChangeEnd = (date) => {
        this.setState({
            endDate: date
        })
    }
    updateCurrentVehicle = (e) => {
        this.setState({
            currentVehicle: e.target.value
        })
    }
    updateCurrentPayment = (e) => {
        this.setState({
            currentPayment: e.target.value
        })
    }
    isAvailable = (date) => {
        const {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = this.state.listing
        const day = date.day()
        var filterMon = day
        var filterTue = day
        var filterWed = day 
        var filterThu = day
        var filterFri = day
        var filterSat = day
        var filterSun = day
        if(!monday){
            filterMon = day !== 1
        }
        if(!tuesday){
            filterTue = day !== 2
        }
        if(!wednesday){
            filterWed = day !== 3
        }
        if(!thursday){
            filterThu = day !== 4
        }
        if(!friday){
            filterFri = day !== 5
        }
        if(!saturday){
            filterSat = day !== 6
        }
        if(!sunday){
            filterSun = day !== 0
        }
        return filterMon && filterTue && filterWed && filterThu && filterFri && filterSat && filterSun
      }
    render() {
        const { address, apple_pay, cash, credit, pay_pal, venmo, price } = this.state.listing
        const { vehicles, total } = this.state
        let mappedVehicles = vehicles.map(vehicle => {
            return (
                <option key={vehicle.id} value={vehicle.id}>{`${vehicle.color} ${vehicle.make}`}</option>
            )
        })
        return (
            <div>
                {this.state.isLoading ?
                    <div>
                        <p>LOADING . . .</p>
                    </div>
                    :
                    <div>
                        <Link to='/listing'>
                            <h4>BACK</h4>
                        </Link>
                        <h2>Checkout</h2>
                        <div>
                            <p>Map w/ Pin?</p>
                        </div>
                        <div>
                            <h3>Address:{address}</h3>
                        </div>
                        <hr />
                        <div>
                            <h3>Vehicles:</h3>
                            <select value={this.state.currentVehicle} onChange={this.updateCurrentVehicle}>
                                <option value='select'>Select a Vehicle</option>
                                {mappedVehicles}
                            </select>
                        </div>
                        <hr />
                        <div>
                            <h3>Schedule:</h3>
                            <DatePicker
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                                filterDate={this.isAvailable}
                                minDate={moment()}
                            />
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                filterDate={this.isAvailable}
                                minDate={moment()}
                            />
                        </div>
                        <hr />
                        <div>
                            <h3>Payments:</h3>
                            <select onChange={this.updateCurrentPayment}>
                                <option value='select'>Select a Payment</option>
                                {!cash ? null :
                                    <option value='cash'>Cash</option>
                                }
                                {!credit ? null :
                                    <option value='credit'>Credit</option>
                                }
                                {!pay_pal ? null :
                                    <option value='paypal'>PayPal</option>
                                }
                                {!apple_pay ? null :
                                    <option value='applepay'>Apple Pay</option>
                                }
                                {!venmo ? null :
                                    <option value='venmo'>Venmo</option>
                                }
                            </select>
                        </div>
                        <hr />
                        <div>
                            <h3>Cost breakdown</h3>
                            <p>PARKING FARE: {price}.00</p>
                            <p>SERVICE FEE: {price * .13}</p>
                            <p>TOTAL: {total}</p>
                        </div>
                        <hr />
                        <Link to='/reservations'>
                            <span onClick={this.handleReserve}>Reserve Now</span>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user,
        currentListing: state.currentListing
    }
}

export default connect(mapStateToProps)(Checkout)