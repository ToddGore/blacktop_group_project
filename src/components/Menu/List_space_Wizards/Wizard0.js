import React, { Component } from "react";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";
// import axios from 'axios';

import "./Wizard0.css";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";
import {connect} from 'react-redux';
import {updateWizLat, updateWizLng, updateWizAddress} from '../../../ducks/reducer'

class Wizard0 extends Component {
  

  componentDidMount(){
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    Geocode.enableDebug();

  }
  
  handleClick = () => {
    console.log(this.props.address);
    Geocode.fromAddress(this.props.address).then(response => {

        // console.log(response)
        const { lat, lng } = response.results[0].geometry.location

        // console.log(lat, lng);

        this.props.updateWizAddress(this.props.address);
        this.props.updateWizLat(lat);
        this.props.updateWizLng(lng);
      },
      error => {
        console.error(error);
      }
    );
  }


  render() {

    const {updateWizAddress} = this.props;

    return (
      <div>
        <div className="wizard0">
          <h1>Where is the parking lot located?</h1>
          <input
            type=""
            className="input"
            onChange={e => {
              updateWizAddress(e.target.value);
            }}
          />
          <br />
          <Link to="/search">
            <img
              alt=""
              src={cancelbutton}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
          <Link to="/wizard1" 
            onClick = {()=>{this.handleClick()}}
          >
            <img
              alt=""
              src={nextarrow}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {lat, lng, address} = state;
  return {
    lat,
    lng, 
    address
  }
}

export default connect(mapStateToProps, {updateWizLat, updateWizLng, updateWizAddress})(Wizard0);
