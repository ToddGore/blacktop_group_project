import React, { Component } from "react";
import { Link } from "react-router-dom";
  import "./Wizards.css";
import { connect } from 'react-redux';
import backarrow from "./../../Images/backarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

class Wizard8 extends Component {

  render() {
    console.log(this.props)

    return (
      <div className = "wizards">
        <div className="wizard8">

          <h1>Here is a preview of your listing:</h1>
          <br />
          <h3>ADDRESS</h3>
          <p>{this.props.address}</p>
          <p>Lat:{this.props.lat}</p>
          <p>Lng:{this.props.lng}</p>
          <br />
          <h3>BUILDING TYPE</h3>
          <p>{this.props.buildingType}</p>
          <br />

          <h3>NUMBER OF AVAILABLE SPACES</h3>
          <p>{this.props.spaceQuantity}</p>
          <br />

          <h3>SPACE TYPE</h3>
          <p>{this.props.spaceType}</p>
          <br />

          <h3>PARKING INSTRUCTIONS</h3>
          <p>{this.props.instructions}</p>
          <br />

          <h3>SPACE DESCRIPTION</h3>
          <p>{this.props.description}</p>
          <br />

          <h3>SPACE SIZE</h3>
          <p>{this.props.spaceSize}</p>
          <br />

          <h3>FEATURES</h3>
          <p>covered: {`${this.props.covered}`}</p>
          <p>lit: {`${this.props.lit}`}</p>
          <p>charging: {`${this.props.charging}`}</p>
          <p>camera: {`${this.props.camera}`}</p>
          <p>fenced: {`${this.props.fenced}`}</p>
          <p>guarded: {`${this.props.guarded}`}</p>
          <br />

          <h3>SPACE AVAILABILITY</h3>
          <p>Monday: {`${this.props.monday}`}</p>
          <p>Tuesday: {`${this.props.tuesday}`}</p>
          <p>Wednesday: {`${this.props.wednesday}`}</p>
          <p>Thursday: {`${this.props.thursday}`}</p>
          <p>Friday: {`${this.props.friday}`}</p>
          <p>Saturday: {`${this.props.saturday}`}</p>
          <p>Sunday: {`${this.props.sunday}`}</p>
          <br/>

          <h3>PAYMENT PREFERENCE</h3>
          <p>credit: {`${this.props.credit}`}</p>
          <p>venmo: {`${this.props.venmo}`}</p>
          <p>paypal: {`${this.props.paypal}`}</p>
          <p>apple pay: {`${this.props.applePay}`}</p>

          {/* the values returned above are booleans of true or false, so we have to escape the jsx for them to log to the console*/}


          <br />
          <Link to="/search">
            <img alt="" src={cancelbutton} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/wizard7">
            <img alt="" src={backarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/mylistings">
            <button className="button">Post</button>
          </Link>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    address: state.address,
    lat: state.lat,
    lng: state.lng,
    buildingType: state.buildingType,
    spaceQuantity: state.spaceQuantity,
    spaceType: state.spaceType,
    spaceSize: state.spaceSize,
    description: state.description,
    instructions: state.instructions,
    covered: state.covered,
    lit: state.lit,
    charging: state.charging,
    camera: state.camera,
    fenced: state.fenced,
    guarded: state.guarded,
    cash: state.cash,
    credit: state.credit,
    venmo: state.venmo,
    paypal: state.paypal,
    applePay: state.applePay,
    monday: state.monday,
    tuesday: state.tuesday,
    wednesday: state.wednesday,
    thursday: state.thursday,
    friday: state.friday,
    saturday: state.saturday,
    sunday: state.sunday
  }
}

export default connect(mapStateToProps)(Wizard8);
