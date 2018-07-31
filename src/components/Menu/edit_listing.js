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
            // console.log(res)
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
    }

    updateTrip() {
        axios.put(`/api/listing/${this.props.match.params.id}`, {
            address: this.state.address,
            building_type: this.state.buildingType,
            space_type: this.state.spaceType,
            num_spaces: this.state.numSpaces,
            space_size: this.state.spaceSize,
            about: this.state.about,
            instructions: this.state.instructions,
            price: this.state.instructions,
            cash: this.state.cash,
            credit: this.state.credit,
            venmo: this.state.venmo,
            pay_pal: this.state.payPal,
            apple_pay: this.state.applePay,
            pic_one: this.state.picOne,
            pic_two: this.state.picTwo,
            pic_three: this.state.picThree,
            pic_four: this.state.picFour,
            monday: this.state.monday,
            tuesday: this.state.tuesday,
            wednesday: this.state.wednesday,
            thursday: this.state.thursday,
            friday: this.state.friday,
            saturday: this.state.saturday,
            sunday: this.state.sunday,
            covered: this.state.covered,
            lit: this.state.lit,
            charging: this.state.charging,
            camera: this.state.camera,
            fenced: this.state.fenced,
            guarded: this.state.guarded
        }).then(res => {
            this.props.history.push('/mylistings')
        }
        )
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        
        return (
            <div>
                <p className='ptag'>address: <input type='' className='input' name='address' onChange={(e) => { this.handleChange(e) }} value={this.state.address} /></p>

                <p className='ptag'>Building Type:
                    <button className='button' name='buildingType' onChange={(e) => { this.handleChange(e) }} value="Residential">Residential</button>
                    <button className='button'  name='buildingType' onChange={(e) => { this.handleChange(e) }} value="Business">Business</button>
                    <button className='button'  name='buildingType' onChange={(e) => { this.handleChange(e) }} value="Other">Other</button>
                </p>

                <br/>
                <p className='ptag'>spaceType:
                    <button className='button' name='spaceType' onChange={(e) => { this.handleChange(e) }} value="Diveway">Driveway</button>
                    <button className='button' name='spaceType' onChange={(e) => { this.handleChange(e) }} value="Home Garage">Home Garage</button>
                    <button className='button' name='spaceType' onChange={(e) => { this.handleChange(e) }} value="Parking Garage">Parking Garage</button>
                    <button className='button' name='spaceType' onChange={(e) => { this.handleChange(e) }} value="Parking Lot">Parking Lot</button>
                    <button className='button' name='spaceType' onChange={(e) => { this.handleChange(e) }} value="Unpaved Lot">Unpaved Lot</button>
                </p>

                <p className='ptag'>numSpaces: <input type='' className='input' name='numSpaces' onChange={(e) => { this.handleChange(e) }} value={this.state.numSpaces} /></p>
                <p className='ptag'>spaceSize: <input type='' className='input' name='spaceSize' onChange={(e) => { this.handleChange(e) }} value={this.state.spaceSize} /></p>
                <p className='ptag'>about: <input type='' className='input' name='about' onChange={(e) => { this.handleChange(e) }} value={this.state.about} /></p>
                <p className='ptag'>instructions: <input type='' className='input' name='instructions' onChange={(e) => { this.handleChange(e) }} value={this.state.instructions} /></p>
                <p className='ptag'>price: <input type='' className='input' name='price' onChange={(e) => { this.handleChange(e) }} value={this.state.price} /></p>

                <p className='ptag'>Payments:
                    <button className='button' name='cash' onChange={(e) => { this.handleChange(e) }} value={this.state.cash}>cash</button>
                    <button className='button' name='credit' onChange={(e) => { this.handleChange(e) }} value={this.state.credit}>credit</button>
                    <button className='button' name='venmo' onChange={(e) => { this.handleChange(e) }} value={this.state.venmo}>venmo</button>
                    <button className='button' name='payPal' onChange={(e) => { this.handleChange(e) }} value={this.state.payPal}>payPal</button>
                    <button className='button' name='applePay' onChange={(e) => { this.handleChange(e) }} value={this.state.applePay}>applePay</button>
                </p>

                <p className='ptag'>picOne: <input type='' className='input' name='picOne' onChange={(e) => { this.handleChange(e) }} value={this.state.picOne} /></p>
                <p className='ptag'>picTwo: <input type='' className='input' name='picTwo' onChange={(e) => { this.handleChange(e) }} value={this.state.picTwo} /></p>
                <p className='ptag'>picThree: <input type='' className='input' name='picThree' onChange={(e) => { this.handleChange(e) }} value={this.state.picThree} /></p>
                <p className='ptag'>picFour: <input type='' className='input' name='picFour' onChange={(e) => { this.handleChange(e) }} value={this.state.picFour} /></p>

                <p className='ptag'>Availability:
                    <button className='button' name='monday' onChange={(e) => { this.handleChange(e) }} value={this.state.monday}>monday</button>
                    <button className='button' name='tuesday' onChange={(e) => { this.handleChange(e) }} value={this.state.tuesday}>tuesday</button>
                    <button className='button' name='wednesday' onChange={(e) => { this.handleChange(e) }} value={this.state.wednesday}>wednesday</button>
                    <button className='button' name='thursday' onChange={(e) => { this.handleChange(e) }} value={this.state.thursday}>thursday</button>
                    <button className='button' name='friday' onChange={(e) => { this.handleChange(e) }} value={this.state.friday}>friday</button>
                    <button className='button' name='saturday' onChange={(e) => { this.handleChange(e) }} value={this.state.saturday}>saturday</button>
                    <button className='button' name='sunday' onChange={(e) => { this.handleChange(e) }} value={this.state.sunday}>sunday</button>
                </p>
                <br />
                <p className='ptag'>Features:
                    <button className='button' name='covered' onChange={(e) => { this.handleChange(e) }} value={this.state.covered}>covered</button>
                    <button className='button' name='lit' onChange={(e) => { this.handleChange(e) }} value={this.state.lit}>covered</button>
                    <button className='button' name='charging' onChange={(e) => { this.handleChange(e) }} value={this.state.charging}>covered</button>
                    <button className='button' name='camera' onChange={(e) => { this.handleChange(e) }} value={this.state.camera}>covered</button>
                    <button className='button' name='fenced' onChange={(e) => { this.handleChange(e) }} value={this.state.fenced}>covered</button>
                    <button className='button' name='guarded' onChange={(e) => { this.handleChange(e) }} value={this.state.guarded}>covered</button>
                </p>

            </div>
        )
    }

}