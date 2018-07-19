import React, { Component } from "react";
import { Link } from "react-router-dom";

import backarrow from "./../../Images/backarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard8 extends Component {
  render() {
    return (
      <div>
        <div className="wizard8">
          This will show them what their listing will look like before they post
          it
          <br />
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
