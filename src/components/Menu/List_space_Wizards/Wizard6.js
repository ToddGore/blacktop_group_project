import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";
import { updateWizMonday, updateWizTuesday, updateWizWednesday, updateWizThursday, updateWizFriday, updateWizSaturday, updateWizSunday } from "../../../ducks/reducer";
import { connect } from "react-redux";

class Wizard6 extends Component {

  render() {

const {updateWizMonday, updateWizTuesday, updateWizWednesday, updateWizThursday, updateWizFriday, updateWizSaturday, updateWizSunday} = this.props;

    return (
      <div className = "wizards">
        <div className="wizard6">

          <h1>Please indicate all available days for your parking space(s).</h1>
          <br />
          <input type="checkbox" id="Monday" name="Monday" className="" value="Monday"
          onChange={(e) => { updateWizMonday(true) }}/>
          <label htmlFor="Monday">Monday</label>
          <br />

          <input type="checkbox" id="Tuesday" name="Tuesday" className="" value="Tuesday"
          onChange={(e) => { updateWizTuesday(true) }}/>
          <label htmlFor="Tuesday">Tuesday</label>
          <br />

          <input type="checkbox" id="Wednesday" name="Wednesday" className="" value="Wednesday"
          onChange={(e) => { updateWizWednesday(true) }}/>
          <label htmlFor="Wednesday">Wednesday</label>
          <br />

          <input type="checkbox" id="Thursday" name="Thursday" className="" value="Thursday"
          onChange={(e) => { updateWizThursday(true) }}/>
          <label htmlFor="Thursday">Thursday</label>
          <br />

          <input type="checkbox" name="Friday" id="Friday" className="" value="Friday"
          onChange={(e) => { updateWizFriday(true) }}/>
          <label htmlFor="Friday">Friday</label>
          <br />

          <input type="checkbox" id="Saturday" name="Saturday" className="" value="Saturday"
          onChange={(e) => { updateWizSaturday(true) }}/>
          <label htmlFor="Saturday" >Saturday</label>
          <br />

          <input type="checkbox" id="Sunday" name="Sunday" className="" value="Sunday"
          onChange={(e) => { updateWizSunday(true) }}/>
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
};

function mapStateToProps(state){
  const{monday, tuesday, wednesday, thursday, friday, saturday, sunday} = state;
  return {
    monday: monday, 
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday,
    sunday: sunday
  }
}

export default connect(mapStateToProps, {updateWizMonday, updateWizTuesday, updateWizWednesday, updateWizThursday, updateWizFriday, updateWizSaturday, updateWizSunday})(Wizard6);
