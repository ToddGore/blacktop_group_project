import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Geocode from "react-geocode";
// import axios from 'axios';

import "./Wizard0.css";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard0 extends Component {
  constructor() {
    super();

    this.state = {
      // lat: 0,
      // lng: 0,
      address: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    // Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    // Geocode.enableDebug();

  }
  handleChange(e) {
    this.setState({ address: e.target.value });
    
  }
  
  // handleClick = () => {
  //   Geocode.fromAddress(this.state.address).then(
  //     response => {

  //       console.log(response)
  //       const { lat, lng } = response.results[0].geometry.location;

  //       this.setState({lat, lng})

  //       console.log(lat, lng);

  //       axios.post('/api/', {
  //         address: this.state.address,
  //         lat: this.state.lat,
  //         lng: this.state.lng
  //       }).then(response => {
          
  //       })
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }



  render() {
    return (
      <div>
        <div className="wizard0">
          <h1>Where is the parking lot located?</h1>
          <input
            type=""
            className="input"
            onChange={e => {
              this.handleChange(e);
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
          // onClick = {()=>{this.handleClick()}}
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
