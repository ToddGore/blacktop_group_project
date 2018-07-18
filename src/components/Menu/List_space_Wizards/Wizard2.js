import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard2.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard2 extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }
  subtract() {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div>
        <div className="wizard2">
          Space type and How many spaces are available
          <br />
          <button
            className="button"
            onClick={() => {
              this.subtract();
            }}
          >
            -
          </button>
          {this.state.count}
          <button
            className="button"
            onClick={() => {
              this.add();
            }}
          >
            +
          </button>
          <br />
          <Link to="/wizard1">
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
          <Link to="/wizard3">
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
