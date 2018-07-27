import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import cancel_icon from './../../newImages/cancel_icon.svg'
import rightarrow_icon from './../../newImages/rightarrow_icon.svg'
import leftarrow_icon from './../../newImages/leftarrow_icon.svg'
import { updateWizBuildingType } from "../../../ducks/reducer";
import { connect } from "react-redux";

class Wizard1 extends Component {

  render() {

    const { updateWizBuildingType } = this.props;
    // console.log(this.props)

    return (
      <div className = "reset">
        <div className="wizard1">
          <h1>Please select your building type.</h1>
          <br />

          <button className='smallbutton'onClick={() => updateWizBuildingType('Residential')} >Residential</button>
          <br />
          <button className='smallbutton'onClick={() => updateWizBuildingType('Business')} >Business</button>
          <br />
          <button className='smallbutton'onClick={() => updateWizBuildingType('Other')} >Other</button>
          <br />
          <br />
          <div className='nav'>
            <Link to="/wizard0">
              <img className='wizardnav'alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/search">
              <img className='wizardnav'alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/wizard2">
              <img className='wizardnav'alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
          </div> 

        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  // console.log(state)
  const { buildingType } = state;
  return {
    buildingType: buildingType
  }
};

export default connect(mapStateToProps, { updateWizBuildingType })(Wizard1);
