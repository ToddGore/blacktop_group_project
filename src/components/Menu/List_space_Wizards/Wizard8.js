import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import { connect } from 'react-redux';
import cancel_icon from './../../newImages/cancel_icon.svg'
import post_icon from './../../newImages/post_icon.svg'
import leftarrow_icon from './../../newImages/leftarrow_icon.svg'
import backarrow from "./../../Images/backarrow.svg";
import axios from 'axios';

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
          listing_id:res.data[0].id
        })
          
      }))
  }

  render() {
    const { address, lat, lng, buildingType, spaceQuantity, spaceType, spaceSize, description, instructions, covered, lit, charging, camera, fenced, guarded, cash, credit, venmo, paypal, applePay, monday, tuesday, wednesday, thursday, friday, saturday, sunday, picOne, picTwo, picThree, picFour, rate } = this.props.state;
    // console.log(this.props)
    return (
      <div className="reset">
        <div className='wizard'>
          <h1>Here is a preview of your listing:</h1>
          <br />

          <h3>ADDRESS</h3>
          <p>{address}</p>
          <p>Lat:{lat}</p>
          <p>Lng:{lng}</p>
          <br />

          <h3>BUILDING TYPE</h3>
          <p>{buildingType}</p>
          <br />

          <h3>NUMBER OF AVAILABLE SPACES</h3>
          <p>{spaceQuantity}</p>
          <br />

          <h3>SPACE TYPE</h3>
          <p>{spaceType}</p>
          <br />

          <h3>PARKING INSTRUCTIONS</h3>
          <p>{instructions}</p>
          <br />

          <h3>SPACE DESCRIPTION</h3>
          <p>{description}</p>
          <br />

          <h3>SPACE SIZE</h3>
          <p>{spaceSize}</p>
          <br />

          <h3>FEATURES</h3>
          <p>covered: {`${covered}`}</p>
          <p>lit: {`${lit}`}</p>
          <p>charging: {`${charging}`}</p>
          <p>camera: {`${camera}`}</p>
          <p>fenced: {`${fenced}`}</p>
          <p>guarded: {`${guarded}`}</p>
          <br />

          <h3>SPACE AVAILABILITY</h3>
          <p>Monday: {`${monday}`}</p>
          <p>Tuesday: {`${tuesday}`}</p>
          <p>Wednesday: {`${wednesday}`}</p>
          <p>Thursday: {`${thursday}`}</p>
          <p>Friday: {`${friday}`}</p>
          <p>Saturday: {`${saturday}`}</p>
          <p>Sunday: {`${sunday}`}</p>
          <br />

          <h3>PAYMENT PREFERENCE</h3>
          <p>cash:{`${cash}`}</p>
          <p>credit: {`${credit}`}</p>
          <p>venmo: {`${venmo}`}</p>
          <p>paypal: {`${paypal}`}</p>
          <p>apple pay: {`${applePay}`}</p>
          <br />

          <h3>HOURLY RATE</h3>
          <p>${rate}</p>

          <h3>Submitted Photos</h3>
          <img src={picOne} alt='' style={{ width: "300px" }} />
          <img src={picTwo} alt='' style={{ width: "300px" }} />
          <img src={picThree} alt='' style={{ width: "300px" }} />
          <img src={picFour} alt='' style={{ width: "300px" }} />

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
              <img className='wizardnav' alt="" src={post_icon} style={{ height: "30px", width: "30px" }} onClick={(e) => { this.handleWizPost() }}/>
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
