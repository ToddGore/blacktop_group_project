import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizard1.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";
import { updateWizBuildingType } from "../../../ducks/reducer";
import { connect } from "react-redux";

class Wizard1 extends Component {

  render() {

    const { updateWizBuildingType } = this.props;
    // console.log(this.props)

    return (
      <div>
        <div className="wizard1">
          <h1>Please select your building type.</h1>
          <br />
          <button onClick={() => updateWizBuildingType('Residential')} >Residential</button>
          <br />
          <button onClick={() => updateWizBuildingType('Business')} >Business</button>
          <br />
          <button onClick={() => updateWizBuildingType('Other')} >Other</button>
          <br />
          <br/>
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

function mapStateToProps(state) {
  // console.log(state)
  const { buildingType } = state;
  return {
    buildingType: buildingType
  }
}

export default connect(mapStateToProps, { updateWizBuildingType })(Wizard1);
