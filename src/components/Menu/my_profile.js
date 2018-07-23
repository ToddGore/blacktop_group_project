import React, { Component } from "react";

import Nav from "../Nav/Nav";
import "./my_profile.css";

export default class Myprofile extends Component {
  constructor() {
    super();

    this.state = {
      profilepicture: "",
      googlename: "",
      username: "",
      email: "",
      phonenumber: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="myprofile">
          <div
            style={{
              height: "150px",
              width: "150px",
              backgroundColor: "grey",
              borderRadius: "50%",
              margin: "auto"
            }}
          >
            {" "}
            Google Profile Pic
          </div>
          <p>Google name will be displayed here</p>
          <input
            placeholder="Username"
            type="username"
            className="input"
            name="username"
            value={this.state.username}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            placeholder="Email"
            type="email"
            className="input"
            name="email"
            value={this.state.email}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            placeholder="Phone Number"
            type="phonenumber"
            className="input"
            name="phonenumber"
            value={this.state.phonenumber}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          {/* <button className='button'>Button</button> */}
          <p>
            Needs edit buttons for each input and also a submit button after
            they have edited
          </p>
        </div>
      </div>
    );
  }
}
