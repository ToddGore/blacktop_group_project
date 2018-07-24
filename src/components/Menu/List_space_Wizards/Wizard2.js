import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizard2.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";
import { updateWizSpaceType, updateWizSpaceQuantity } from '../../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard2 extends Component {
  increaseSpaceQuanity() {
    this.props.updateWizSpaceQuantity(this.props.spaceQuantity +1)
    // console.log(this.props.spaceQuantity + 1)
  }

  decreaseSpaceQuantity() {
    if (this.props.spaceQuantity <= 0) {
      this.props.updateWizSpaceQuantity(0)
    } else {
      this.props.updateWizSpaceQuantity(this.props.spaceQuantity -1);
    }
  }
  
  render() {

    const { updateWizSpaceType } = this.props;
    return (
      <div>
        <div className="wizard2">
          <h1>Please select your parking space quantity.</h1>
          <br />

          <button className="button" onClick={() => { this.increaseSpaceQuanity() }}>+</button>
          <span>{this.props.spaceQuantity}</span>

          <button className="button" onClick={() => { this.decreaseSpaceQuantity() }}>-</button>
          <br />
          <br />
          <h1>Please select your parking space type.</h1>
          <br />
          <button onClick={() => { updateWizSpaceType('Driveway') }}>Driveway</button>
          <br />
          <button onClick={() => { updateWizSpaceType('Home Garage') }}>Home Garage</button>
          <br />
          <button onClick={() => { updateWizSpaceType('Parking Garage') }}>Parking Garage</button>
          <br />
          <button onClick={() => { updateWizSpaceType('Parking Lot') }}>Parking Lot</button>
          <br />
          <button onClick={() => { updateWizSpaceType('Unpaved Lot') }}>Unpaved Lot</button>
          <br />
          <br />
          <Link to="/wizard1">
            <img alt="" src={backarrow} style={{ height: "30px", width: "30px" }}/>
          </Link>

          <Link to="/search">
            <img alt="" src={cancelbutton} style={{ height: "30px", width: "30px" }}/>
          </Link>

          <Link to="/wizard3">
            <img alt="" src={nextarrow} style={{ height: "30px", width: "30px" }}/>
          </Link>

        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const { spaceType, spaceQuantity } = state;
  return {
    spaceType: spaceType,
    spaceQuantity: spaceQuantity
  }
}

export default connect(mapStateToProps, { updateWizSpaceType, updateWizSpaceQuantity })(Wizard2);