import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard1.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard1 extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="wizard1">
          Building Type
          <br />
          <Link to="/wizard0">
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
          <Link to="/wizard2">
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
