import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard3.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard3 extends Component {
  constructor() {
    super();

    this.state = {
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="wizard3">
          Features, Space Size, Instructions, Description
          <br />
          <hr />
          <input
            name="description"
            className="input"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <hr/>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <hr />
          <br />
          <Link to="/wizard2">
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
          <Link to="/wizard4">
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
