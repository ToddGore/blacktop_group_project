import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizard6.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";

export default class Wizard6 extends Component {

  render() {
    return (
      <div>
        <div className="wizard6">

          <h1>Please indicate all available days for your parking space(s).</h1>
          <br />
          <input type="checkbox" id="Monday" name="Monday" className="" value="Monday" />
          <label htmlFor="Monday">Monday</label>
          <br />

          <input type="checkbox" id="Tuesday" name="Tuesday" className="" value="Tuesday" />
          <label htmlFor="Tuesday">Tuesday</label>
          <br />

          <input type="checkbox" id="Wednesday" name="Wednesday" className="" value="Wednesday" />
          <label htmlFor="Wednesday">Wednesday</label>
          <br />

          <input type="checkbox" id="Thursday" name="Thursday" className="" value="Thursday" />
          <label htmlFor="Thursday">Thursday</label>
          <br />

          <input type="checkbox" name="Friday" id="Friday" className="" value="Friday" />
          <label htmlFor="Friday">Friday</label>
          <br />

          <input type="checkbox" id="Saturday" name="Saturday" className="" value="Saturday" />
          <label htmlFor="Saturday" >Saturday</label>
          <br />

          <input type="checkbox" id="Sunday" name="Sunday" className="" value="Sunday" />
          <label htmlFor="Sunday" >Sunday</label>
          <br />

          <Link to="/wizard5">
            <img alt="" src={backarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/search">
            <img alt="" src={cancelbutton} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/wizard7">
            <img alt="" src={nextarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

        </div>
      </div>
    );
  }
}
