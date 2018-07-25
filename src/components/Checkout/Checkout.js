import React, { Component } from 'react'
import axios from 'axios'

class Checkout extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            listing: {},
            vehicles: []

        }
    }
    componentDidMount(){
        //getUserVehicles
        //getListing
    }
    getListing = () => {
        axios.get(`/api/listing/5`).then(res => {
            this.setState({
                listing: res.data[0],
            })
        })
    }
    getVehicle = () => {
        axios.get(`/api/vehicle/2`).then(res => {
            this.setState({
                vehicles: res.data
            })
        })
    }

    render(){
        return(
            <div>
                <h2>Checkout</h2>
                <div>
                    <p>Map w/ Pin?</p>
                </div>
                <div>
                    <p>Address</p>
                </div>
                <div>
                    <p>Add Car / Select Payment</p>
                </div>
                <div>
                    <p>Cost breakdown</p>
                </div>
                <span>Reserve Now</span>  
            </div> 
        )
    }
}

export default Checkout