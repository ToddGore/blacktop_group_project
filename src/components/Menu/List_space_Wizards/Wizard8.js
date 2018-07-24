import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import backarrow from "./../../Images/backarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

class Wizard8 extends Component {
  render() {
    return (
      <div>
        <div className="wizard8">
          This will show them what their listing will look like before they post
          it
          <br />
          <p>Address:{this.props.address}</p>
          <p>Lat:{this.props.lat}</p>
          <p>Lng:{this.props.lng}</p>
          <p>Building Type: {this.props.buildingType}</p>
          <p>Quantity: {this.props.spaceQuantity}</p>
          <p>Space Type: {this.props.spaceType}</p>
          <p>instructions: {this.props.instructions}</p>
          <p>Description: {this.props.description}</p>
          <p>Space Size: {this.props.spaceSize}</p>
          <p>Features-charging: {this.props.charging}</p>

          <Link to="/search">
            <img
              alt=""
              src={cancelbutton}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
          <Link to="/wizard7">
            <img
              alt=""
              src={backarrow}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
          <Link to="/mylistings">
            <button className="button">Post</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
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
    guarded: state.guarded
  }
}

export default connect(mapStateToProps)(Wizard8);
