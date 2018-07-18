import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard7.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard7 extends Component {
  constructor() {
    super();

    this.state = {
      cash: false,
      credit: false,
      venmo: false,
      paypal: false,
      applepay: false
    };
    this.handlePayment = this.handlePayment.bind(this);
  }

  handlePayment(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    return (
      <div>
        <div className="wizard7">
          I'd like people to pay me with , billing
          <br />
          Cash<input
            type="checkbox"
            className=""
            value={!this.state.cash}
            name="cash"
            onChange={e => {
              this.handlePayment(e);
            }}
          />
          <br />
          Credit<input
            type="checkbox"
            className=""
            value={!this.state.credit}
            name="credit"
            onChange={e => {
              this.handlePayment(e);
            }}
          />
          <br />
          Venmo<input
            type="checkbox"
            className=""
            value={!this.state.venmo}
            name="venmo"
            onChange={e => {
              this.handlePayment(e);
            }}
          />
          <br />
          Paypal<input
            type="checkbox"
            className=""
            value={!this.state.paypal}
            name="paypal"
            onChange={e => {
              this.handlePayment(e);
            }}
          />
          <br />
          Apple Pay<input
            type="checkbox"
            className=""
            value={!this.state.applepay}
            name="applepay"
            onChange={e => {
              this.handlePayment(e);
            }}
          />
          <br />
          <Link to="/wizard6">
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
          <Link to="/wizard8">
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
