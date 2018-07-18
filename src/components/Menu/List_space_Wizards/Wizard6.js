import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard6.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard6 extends Component {
  constructor() {
    super();

    this.state = {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.checked);
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    return (
      <div>
        <div className="wizard6">
          Times the spot is available
          <br />
          <input
            type="checkbox"
            name="Monday"
            className=""
            value={!this.state.Monday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Monday
          <br />
          <input
            type="checkbox"
            name="Tuesday"
            className=""
            value={!this.state.Tuesday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Tuesday
          <br />
          <input
            type="checkbox"
            name="Wednesday"
            className=""
            value={!this.state.Wednesday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Wednesday
          <br />
          <input
            type="checkbox"
            name="Thursday"
            className=""
            value={!this.state.Thursday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Thursday
          <br />
          <input
            type="checkbox"
            name="Friday"
            className=""
            value={!this.state.Friday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Friday
          <br />
          <input
            type="checkbox"
            name="Saturday"
            className=""
            value={!this.state.Saturday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Saturday
          <br />
          <input
            type="checkbox"
            name="Sunday"
            className=""
            value={!this.state.Sunday}
            onChange={e => {
              this.handleChange(e);
            }}
          />Sunday
          <br />
          <Link to="/wizard5">
            <img
              alt=""
              src={backarrow}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
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
              src={nextarrow}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
