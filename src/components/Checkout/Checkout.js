import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'

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
            currentVehicle: {},
            paymentArray: [],
            startDate: moment(),
            endDate: moment()
        }
    }
    componentDidMount() {
        this.getListing()
    }
    getListing = () => {
        axios.get(`/api/listing/6`).then(res => {
            this.setState({
                listing: res.data[0],
            })
            this.getVehicle()
        })
    }
    getVehicle = () => {
        axios.get(`/api/vehicle/2`).then(res => {
            this.setState({
                vehicles: res.data,
                isLoading: false
            })
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
    // getPaymentArray = () => {
    //     const {cash, credit, pay_pal, venmo, apple_pay} = this.state.listing
    //     let payArr = []
    //     if(cash){
    //         payArr.push(cash)
    //     }
    //     if(credit){
    //         payArr.push(credit)
    //     }
    //     if(pay_pal){
    //         payArr.push(pay_pal)
    //     }
    //     if(venmo){
    //         payArr.push(venmo)
    //     }
    //     if(apple_pay){
    //         payArr.push(apple_pay)
    //     }
    // }


    render() {
        console.log('Listing info:', this.state.listing)
        console.log('Vehicles', this.state.vehicles)
        const { address, instructions, about, apple_pay, cash, credit, pay_pal, venmo, price } = this.state.listing
        const { vehicles } = this.state
        let mappedVehicles = vehicles.map(vehicle => {
            return (
                <option key={vehicle.id} value=''>{`${vehicle.color} ${vehicle.make}`}</option>
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
                            <p>Address:{address}</p>
                        </div>
                        <hr />
                        <div>
                            <p>Vehicles:</p>
                            <select>
                                {mappedVehicles}
                            </select>
                        </div>
                        <hr />
                        <div>
                            <p>Schedule:</p>
                            <DatePicker
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                            />
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                            />
                        </div>
                        <hr />
                        <div>
                            <p>Payments:</p>
                            <select>
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
                            <p>PARKING FARE({price}.00)</p>
                            <p>SERVICE FEE({price * .13})</p>
                            <p>TOTAL({Math.round((price * 1.13) * 100) / 100})</p>
                        </div>
                        <hr />
                        <Link to='/reservations'>
                            <span>Reserve Now</span>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

export default Checkout