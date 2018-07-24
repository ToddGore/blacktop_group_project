import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";
import { updateWizSpaceSize, updateWizDescription, updateWizInstructions, updateWizCovered, updateWizLit, updateWizCharging, updateWizCamera, updateWizFenced, updateWizGuarded } from '../../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard3 extends Component {

  render() {
    console.log(this.props)

    const { updateWizDescription, updateWizInstructions, updateWizSpaceSize, updateWizCovered, updateWizLit, updateWizCharging, updateWizCamera, updateWizFenced, updateWizGuarded } = this.props;

    return (
      <div className = "wizards">
        <div className="wizard3">

          <h1>Please provide parking instructions and a description of your lot(s).</h1>
          <br />
          <hr />

          <input className="input" placeholder="Parking Instructions" onChange={(e) => { updateWizInstructions(e.target.value) }} />
          <hr />
          <input className="input" placeholder="Lot Description" onChange={(e) => { updateWizDescription(e.target.value) }} />

          <br />
          <br />
          <h3>Plase select a parking space size.</h3>
          <br />

          <button onClick={() => { updateWizSpaceSize('Compact') }}>Compact</button>
          <button onClick={() => { updateWizSpaceSize('Midsized') }}>Midsized</button>
          <button onClick={() => { updateWizSpaceSize('Large') }}>Large</button>
          <button onClick={() => { updateWizSpaceSize('Oversized') }}>Oversized</button>

          <br />
          <br />
          <h3>Please select all features that apply:</h3>
          <br />

          <button onClick={(e) => { updateWizCovered(true) }}>Covered</button>
          <button onClick={(e) => { updateWizLit(true) }}>Lit</button>
          <button onClick={(e) => { updateWizCharging(true) }}>Charging</button>
          <button onClick={(e) => { updateWizCamera(true) }}>Camera</button>
          <button onClick={(e) => { updateWizFenced(true) }}>Fenced</button>
          <button onClick={(e) => { updateWizGuarded(true) }}>Guarded</button>

          <br />
          <br />

          <Link to="/wizard2">
            <img alt="" src={backarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/search">
            <img alt="" src={cancelbutton} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/wizard4">
            <img alt="" src={nextarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { description, instructions, spaceSize, covered, lit, charging, camera, fenced, guarded } = state;
  return {
    description: description,
    instructions: instructions,
    spaceSize: spaceSize,
    covered: covered,
    lit: lit,
    charging: charging,
    camera: camera,
    fenced: fenced,
    guarded: guarded
  }
}

export default connect(mapStateToProps, { updateWizDescription, updateWizInstructions, updateWizSpaceSize, updateWizCovered, updateWizLit, updateWizCharging, updateWizCamera, updateWizFenced, updateWizGuarded })(Wizard3);