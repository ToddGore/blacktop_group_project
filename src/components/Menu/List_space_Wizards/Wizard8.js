import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import { connect } from 'react-redux';
import cancel_icon from './../../newImages/cancel_icon.svg'
import post_icon from './../../newImages/post_icon.svg'
import leftarrow_icon from './../../newImages/leftarrow_icon.svg'
import backarrow from "./../../Images/backarrow.svg";
import axios from 'axios';

import coverd_parking_icon from './../../newImages/covered_parking_icon.svg'
import lit_icon from './../../newImages/lit_icon.svg'
import charging_icon from './../../newImages/charging_icon.svg'
import camera_icon from './../../newImages/camera_icon.svg'
import fence_icon from './../../newImages/fence_icon.svg'
import police_icon from './../../newImages/police_icon.svg'
import delete_icon from './../../newImages/delete_icon.svg'
import edit_icon from './../../newImages/edit_icon.svg'
import coverd_parking_icon_off from './../../newImages/covered_parking_iconoff.svg'
import lit_icon_off from './../../newImages/lit_iconoff.svg'
import charging_icon_off from './../../newImages/charging_iconoff.svg'
import camera_icon_off from './../../newImages/camera_iconoff.svg'
import fence_icon_off from './../../newImages/fence_iconoff.svg'
import police_icon_off from './../../newImages/police_iconoff.svg'

class Wizard8 extends Component {

  handleWizPost() {

    const { address, lat, lng, buildingType, spaceQuantity, spaceType, spaceSize, description, instructions, covered, lit, charging, camera, fenced, guarded, cash, credit, venmo, paypal, applePay, monday, tuesday, wednesday, thursday, friday, saturday, sunday, picOne, picTwo, picThree, picFour, rate } = this.props.state;

    axios.post('/api/listing', {
      address: address,
      building_type: buildingType,
      space_type: spaceType,
      num_spaces: spaceQuantity,
      space_size: spaceSize,
      about: description,
      instructions: instructions,
      price: rate,
      host_id: this.props.state.user.id,
      lat: lat,
      lng: lng
    })
      .then((res => {
        console.log(res)
        axios.post('/api/feature', {
          covered: covered,
          lit: lit,
          charging: charging,
          camera: camera,
          fenced: fenced,
          guarded: guarded,
          listing_id: res.data[0].id
        })


        axios.post('/api/picture', {
          pic_one: picOne,
          pic_two: picTwo,
          pic_three: picThree,
          pic_four: picFour,
          listing_id: res.data[0].id
        })

        axios.post('/api/availability', {
          monday: monday,
          tuesday: tuesday,
          wednesday: wednesday,
          thursday: thursday,
          friday: friday,
          saturday: saturday,
          sunday: sunday,
          listing_id: res.data[0].id
        })

        axios.post('api/payment', {
          cash: cash,
          credit: credit,
          venmo: venmo,
          pay_pal: paypal,
          apple_pay: applePay,
          listing_id: res.data[0].id
        })

      }))
  }

  render() {
    const { address, lat, lng, buildingType, spaceQuantity, spaceType, spaceSize, description, instructions, covered, lit, charging, camera, fenced, guarded, cash, credit, venmo, paypal, applePay, monday, tuesday, wednesday, thursday, friday, saturday, sunday, picOne, picTwo, picThree, picFour, rate } = this.props.state;
    // console.log(this.props)
    return (
      <div className="reset">
        <div className='wizard'>
          <br />

          <h1>Here is a preview of your listing</h1>
          <br />
          <div className='card'>
            <h3>ADDRESS</h3>
            <br />
            <p>{address}</p>
            <hr />
            <p>Lat:{lat}</p>
            <p>Lng:{lng}</p>
            <hr />

            <h3>BUILDING TYPE</h3>
            <br />
            <p>{buildingType}</p>
            <hr />

            <h3>NUMBER OF AVAILABLE SPACES</h3>
            <br />
            <p>{spaceQuantity}</p>
            <hr />

            <h3>SPACE TYPE</h3>
            <br />
            <p>{spaceType}</p>
            <hr />

            <h3>PARKING INSTRUCTIONS</h3>
            <br />
            <p>{instructions}</p>
            <hr />

            <h3>SPACE DESCRIPTION</h3>
            <br />
            <p>{description}</p>
            <hr />

            <h3>SPACE SIZE</h3>
            <br />
            <p>{spaceSize}</p>
            <hr />

            {/* <h3>FEATURES</h3>
            <br />
            <p>covered: {`${covered}`}</p>
            <p>lit: {`${lit}`}</p>
            <p>charging: {`${charging}`}</p>
            <p>camera: {`${camera}`}</p>
            <p>fenced: {`${fenced}`}</p>
            <p>guarded: {`${guarded}`}</p>
            <hr /> */}


            <div className='card'>
              <h1 style={{ textAlign: 'center' }}>Features</h1>
              <hr />
              <div className='grid'>
                <div>
                  {covered ?
                    <div className='featureicon'><img alt='' src={coverd_parking_icon} className='mylistingicon' />Covered</div>
                    : <div className='featureicon'><img alt='' src={coverd_parking_icon_off} className='mylistingicon' />Covered</div>}
                </div>
                <div>
                  {lit ?
                    <div className='featureicon'><img alt='' src={lit_icon} className='mylistingicon' />Lit</div>
                    : <div className='featureicon'><img alt='' src={lit_icon_off} className='mylistingicon' />Lit</div>}
                </div>
                <div>
                  {charging ?
                    <div className='featureicon'><img alt='' src={charging_icon} className='mylistingicon' />Charging</div>
                    : <div className='featureicon'><img alt='' src={charging_icon_off} className='mylistingicon' />Charging</div>}
                </div>
                <div>
                  {camera ?
                    <div className='featureicon'><img alt='' src={camera_icon} className='mylistingicon' />Surveillance</div>
                    : <div className='featureicon'><img alt='' src={camera_icon_off} className='mylistingicon' />Surveillance</div>}
                </div>
                <div>
                  {fenced ?
                    <div className='featureicon'><img alt='' src={fence_icon} className='mylistingicon' />Fenced</div>
                    : <div className='featureicon'><img alt='' src={fence_icon_off} className='mylistingicon' />Fenced</div>}
                </div>
                <div>
                  {guarded ?
                    <div className='featureicon'><img alt='' src={police_icon} className='mylistingicon' />Security</div>
                    : <div className='featureicon'><img alt='' src={police_icon_off} className='mylistingicon' />Security</div>}
                </div>
              </div>
            </div>































            <h3>SPACE AVAILABILITY</h3>
            <div className="simple-border">
              <p className={monday ? "visible" : "invisible"}>Monday</p>
              <hr />
              <p className={tuesday ? "visible" : "invisible"}>Tuesday</p>
              <hr />
              <p className={wednesday ? "visible" : "invisible"}>Wednesday</p>
              <hr />
              <p className={thursday ? "visible" : "invisible"}>Thursday</p>
              <hr />
              <p className={friday ? "visible" : "invisible"}>Friday</p>
              <hr />
              <p className={saturday ? "visible" : "invisible"}>Saturday</p>
              <hr />
              <p className={sunday ? "visible" : "invisible"}>Sunday</p>
            </div>

            {/* <p>Monday: {`${monday}`}</p>
            <p>Tuesday: {`${tuesday}`}</p>
            <p>Wednesday: {`${wednesday}`}</p>
            <p>Thursday: {`${thursday}`}</p>
            <p>Friday: {`${friday}`}</p>
            <p>Saturday: {`${saturday}`}</p>
            <p>Sunday: {`${sunday}`}</p> */}
            {/* <hr /> */}
            <br />
            <h3>PAYMENT PREFERENCE</h3>
            <div className="simple-border">
              <p className={cash ? "visible" : "invisible"}>Cash</p>
              <p className={credit ? "visible" : "invisible"}>Credit</p>
              <p className={venmo ? "visible" : "invisible"}>Venmo</p>
              <p className={paypal ? "visible" : "invisible"}>Paypal</p>
              <p className={applePay ? "visible" : "invisible"}>ApplePay</p>


              {/* <p>cash:{`${cash}`}</p>
              <p>credit: {`${credit}`}</p>
              <p>venmo: {`${venmo}`}</p>
              <p>paypal: {`${paypal}`}</p>
              <p>apple pay: {`${applePay}`}</p> */}
            </div>
            <hr />

            <h3>HOURLY RATE</h3>
            <br />
            <p>${rate}</p>
            <hr />
            <h3>Submitted Photos</h3>
            <img src={picOne} alt='' style={{ width: "300px" }} />
            <img src={picTwo} alt='' style={{ width: "300px" }} />
            <img src={picThree} alt='' style={{ width: "300px" }} />
            <img src={picFour} alt='' style={{ width: "300px" }} />
          </div>
          {/* the values returned above are booleans of true or false, so we have to escape the jsx for them to log to the console*/}


          <br />

          <div className='nav'>
            <Link to="/wizard7">
              <img className='wizardnav' alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
            <Link to="/search">
              <img className='wizardnav' alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
            <Link to="/mylistings">
              <img className='wizardnav' alt="" src={post_icon} style={{ height: "30px", width: "30px" }} onClick={(e) => { this.handleWizPost() }} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Wizard8);
