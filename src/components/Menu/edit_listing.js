import React, { Component } from 'react';
import axios from 'axios'
import './edit_listing.css'
// import { Link } from 'react-router-dom'
// import Nav from '../Nav/Nav'


export default class EditListing extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            buildingType: '',
            spaceType: '',
            numSpaces: 0,
            spaceSize: '',
            about: '',
            instructions: '',
            price: 0,
            cash: false,
            credit: false,
            venmo: false,
            payPal: false,
            applePay: false,
            picOne: false,
            picTwo: false,
            picThree: false,
            picFour: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            covered: false,
            lit: false,
            charging: false,
            camera: false,
            fenced: false,
            guarded: false
        }
    }


    componentDidMount() {
        axios.get(`/api/listing/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            // this console log shows that res is an object, data is an array of objects, and data is coming from postgress
            this.setState({
                address: res.data[0].address,
                buildingType: res.data[0].building_type,
                spaceType: res.data[0].space_type,
                numSpaces: res.data[0].num_spaces,
                spaceSize: res.data[0].space_size,
                about: res.data[0].about,
                instructions: res.data[0].instructions,
                price: res.data[0].price,
                cash: res.data[0].cash,
                credit: res.data[0].credit,
                venmo: res.data[0].venmo,
                payPal: res.data[0].pay_pal,
                applePay: res.data[0].apple_pay,
                picOne: res.data[0].pic_one,
                picTwo: res.data[0].pic_two,
                picThree: res.data[0].pic_three,
                picFour: res.data[0].pic_four,
                monday: res.data[0].monday,
                tuesday: res.data[0].tuesday,
                wednesday: res.data[0].wednesday,
                thursday: res.data[0].thursday,
                friday: res.data[0].friday,
                saturday: res.data[0].saturday,
                sunday: res.data[0].sunday,
                covered: res.data[0].covered,
                lit: res.data[0].lit,
                charging: res.data[0].charging,
                camera: res.data[0].camera,
                fenced: res.data[0].fenced,
                guarded: res.data[0].guarded

            })
        })
    };

    updateListing() {
        axios.put(`/api/listing/${this.props.match.params.id}`, {
            address: this.state.address,
            building_type: this.state.buildingType,
            space_type: this.state.spaceType,
            num_spaces: this.state.numSpaces,
            space_size: this.state.spaceSize,
            about: this.state.about,
            instructions: this.state.instructions,
            price: this.state.price
        }).then(res => {
            axios.put(`/api/feature/${this.props.match.params.id}`, {
                covered: this.state.covered,
                lit: this.state.lit,
                charging: this.state.charging,
                camera: this.state.camera,
                fenced: this.state.fenced,
                guarded: this.state.guarded
            }).then(res => {
                axios.put(`api/picture/${this.props.match.params.id}`, {
                    pic_one: this.state.picOne,
                    pic_two: this.state.picTwo,
                    pic_three: this.state.picThree,
                    pic_four: this.state.picFour,

                }).then(res => {
                    axios.put(`/api/availability/${this.props.match.params.id}`, {
                        monday: this.state.monday,
                        tuesday: this.state.tuesday,
                        wednesday: this.state.wednesday,
                        thursday: this.state.thursday,
                        friday: this.state.friday,
                        saturday: this.state.saturday,
                        sunday: this.state.sunday
                    }).then(res => {
                        axios.put(`/api/payment/${this.props.match.params.id}`, {
                            cash: this.state.cash,
                            credit: this.state.credit,
                            venmo: this.state.venmo,
                            pay_pal: this.state.payPal,
                            apple_pay: this.state.applePay
                        }).then(res => {
                            this.props.history.push('/mylistings')

                        })
                    })
                })
            })
        })
    };

    handleClick(e) {
        this.setState({ [e.target.name]: true });
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div>

                <p className='ptag'>address: <input type='' className='input' name='address' onChange={(e) => { this.handleChange(e) }} value={this.state.address} /></p>
                <br/>
                <p className='ptag'>Building Type:
                    <button className='button' name='buildingType' onClick={(e) => { this.handleChange(e) }} value="Residential">Residential</button>
                    <button className='button' name='buildingType' onClick={(e) => { this.handleChange(e) }} value="Business">Business</button>
                    <button className='button' name='buildingType' onClick={(e) => { this.handleChange(e) }} value="Other">Other</button>
                </p>
                <br />
                <p className='ptag'>Space Type:
                    <button className='button' name='spaceType' onClick={(e) => { this.handleChange(e) }} value="Diveway">Driveway</button>
                    <button className='button' name='spaceType' onClick={(e) => { this.handleChange(e) }} value="Home Garage">Home Garage</button>
                    <button className='button' name='spaceType' onClick={(e) => { this.handleChange(e) }} value="Parking Garage">Parking Garage</button>
                    <button className='button' name='spaceType' onClick={(e) => { this.handleChange(e) }} value="Parking Lot">Parking Lot</button>
                    <button className='button' name='spaceType' onClick={(e) => { this.handleChange(e) }} value="Unpaved Lot">Unpaved Lot</button>
                </p>
                <br/>
                <p className='ptag'>Number of Available Spaces: <input type='' className='input' name='numSpaces' onChange={(e) => { this.handleChange(e) }} value={this.state.numSpaces} /></p>
                <br/>
                <p className='ptag'>Space Size:
                    <button className='button' name='spaceSize' onClick={(e) => { this.handleChange(e) }} value="Compact">Compact</button>
                    <button className='button' name='spaceSize' onClick={(e) => { this.handleChange(e) }} value="Midsized">Midsized</button>
                    <button className='button' name='spaceSize' onClick={(e) => { this.handleChange(e) }} value="Large">Large</button>
                    <button className='button' name='spaceSize' onClick={(e) => { this.handleChange(e) }} value="Oversized">Oversized</button>
                </p>
                <br/>
                <p className='ptag'>About: <input type='' className='input' name='about' onChange={(e) => { this.handleChange(e) }} value={this.state.about} /></p>
                <p className='ptag'>Instructions: <input type='' className='input' name='instructions' onChange={(e) => { this.handleChange(e) }} value={this.state.instructions} /></p>
                <p className='ptag'>Hourly Rate: <input type='' className='input' name='price' onChange={(e) => { this.handleChange(e) }} value={this.state.price} /></p>
                <br/>
                <p className='ptag'>Payments:
                    <button className='button' name='cash' onClick={(e) => { this.handleClick(e) }} value={this.state.cash}>cash</button>
                    <button className='button' name='credit' onClick={(e) => { this.handleClick(e) }} value={this.state.credit}>credit</button>
                    <button className='button' name='venmo' onClick={(e) => { this.handleClick(e) }} value={this.state.venmo}>venmo</button>
                    <button className='button' name='payPal' onClick={(e) => { this.handleClick(e) }} value={this.state.payPal}>payPal</button>
                    <button className='button' name='applePay' onClick={(e) => { this.handleClick(e) }} value={this.state.applePay}>applePay</button>
                </p>
                <br/>
                <p className='ptag'>Picture 1: <input type='' className='input' name='picOne' onChange={(e) => { this.handleChange(e) }} value={this.state.picOne} /></p>
                <p className='ptag'>Picture 2: <input type='' className='input' name='picTwo' onChange={(e) => { this.handleChange(e) }} value={this.state.picTwo} /></p>
                <p className='ptag'>Picture 3: <input type='' className='input' name='picThree' onChange={(e) => { this.handleChange(e) }} value={this.state.picThree} /></p>
                <p className='ptag'>Pciture 4: <input type='' className='input' name='picFour' onChange={(e) => { this.handleChange(e) }} value={this.state.picFour} /></p>
                <br/>
                <p className='ptag'>Availability:
                    <button className='button' name='monday' onClick={(e) => { this.handleClick(e) }} value={this.state.monday}>Monday</button>
                    <button className='button' name='tuesday' onClick={(e) => { this.handleClick(e) }} value={this.state.tuesday}>Tuesday</button>
                    <button className='button' name='wednesday' onClick={(e) => { this.handleClick(e) }} value={this.state.wednesday}>Wednesday</button>
                    <button className='button' name='thursday' onClick={(e) => { this.handleClick(e) }} value={this.state.thursday}>Thursday</button>
                    <button className='button' name='friday' onClick={(e) => { this.handleClick(e) }} value={this.state.friday}>Friday</button>
                    <button className='button' name='saturday' onClick={(e) => { this.handleClick(e) }} value={this.state.saturday}>Saturday</button>
                    <button className='button' name='sunday' onClick={(e) => { this.handleClick(e) }} value={this.state.sunday}>Sunday</button>
                </p>
                <br />
                <p className='ptag'>Features:
                    <button className='button' name='covered' onClick={(e) => { this.handleClick(e) }} value={this.state.covered}>Covered</button>
                    <button className='button' name='lit' onClick={(e) => { this.handleClick(e) }} value={this.state.lit}>Lit</button>
                    <button className='button' name='charging' onClick={(e) => { this.handleClick(e) }} value={this.state.charging}>Charging</button>
                    <button className='button' name='camera' onClick={(e) => { this.handleClick(e) }} value={this.state.camera}>Camera</button>
                    <button className='button' name='fenced' onClick={(e) => { this.handleClick(e) }} value={this.state.fenced}>Fenced</button>
                    <button className='button' name='guarded' onClick={(e) => { this.handleClick(e) }} value={this.state.guarded}>Guarded</button>
                </p>
                <br/>
                <button onClick={(e) => { this.updateListing() }}>Submit Updates</button>
            </div >
        )
    }

}