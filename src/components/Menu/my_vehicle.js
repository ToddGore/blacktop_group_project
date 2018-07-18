import React, { Component } from "react";

import Nav from "./../Nav/Nav";
import "./my_vehicle.css";

export default class Myvehicle extends Component {
  constructor() {
    super();

    this.state = {
      Year: "",
      Make: "",
      Model: "",
      Color: "",
      Size: "",
      Plate: "",
      Pictures: []
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
        <div className="myvehicle">
          <div
            style={{
              height: "100px",
              backgroundColor: "lightgrey",
              width: "100px",
              margin: "auto",
              borderRadius: "50%",
              padding: "10px"
            }}
          >
            + Picture
          </div>
          <input
            type=""
            className="input"
            value={this.state.Year}
            name="Year"
            placeholder="Year"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          <input
            type=""
            className="input"
            value={this.state.Make}
            name="Make"
            placeholder="Make"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          <input
            type=""
            className="input"
            value={this.state.Model}
            name="Model"
            placeholder="Model"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          <input
            type=""
            className="input"
            value={this.state.Color}
            name="Color"
            placeholder="Color"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          <input
            type=""
            className="input"
            value={this.state.Plate}
            name="Plate"
            placeholder="License Plate"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          Size: (click on a button)
          <br />
          <button className="button">Submit</button>
        </div>
      </div>
    );
  }
}
