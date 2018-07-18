import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard0.css";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard0 extends Component {
  constructor() {
    super();

    this.state = {
      address: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ address: e.target.value });
  }

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
          <Link to="/wizard1">
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
