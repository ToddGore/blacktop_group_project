import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import cancel_icon from './../../newImages/cancel_icon.svg'
import rightarrow_icon from './../../newImages/rightarrow_icon.svg'
import leftarrow_icon from './../../newImages/leftarrow_icon.svg'
import add_icon from './../../newImages/add_icon.svg'
import minus_icon from './../../newImages/minus_icon.svg'
import { updateWizSpaceType, updateWizSpaceQuantity } from '../../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard2 extends Component {

  increaseSpaceQuanity() {
    this.props.updateWizSpaceQuantity(this.props.spaceQuantity + 1)
    // console.log(this.props.spaceQuantity + 1)
  }

  decreaseSpaceQuantity() {
    if (this.props.spaceQuantity <= 0) {
      this.props.updateWizSpaceQuantity(0)
    } else {
      this.props.updateWizSpaceQuantity(this.props.spaceQuantity - 1);
    }
  }

  render() {

    const { updateWizSpaceType } = this.props;

    return (
      <div className ="reset">
        <div className="wizard2">
          <br />
          <br />
          <h1>Please select your parking space type.</h1>
          <br />

          <button className='smallbutton'onClick={() => { updateWizSpaceType('Driveway') }}>Driveway</button>
          <br />
          <button className='smallbutton'onClick={() => { updateWizSpaceType('Home Garage') }}>Home Garage</button>
          <br />
          <button className='smallbutton'onClick={() => { updateWizSpaceType('Parking Garage') }}>Parking Garage</button>
          <br />
          <button className='smallbutton'onClick={() => { updateWizSpaceType('Parking Lot') }}>Parking Lot</button>
          <br />
          <button className='smallbutton'onClick={() => { updateWizSpaceType('Unpaved Lot') }}>Unpaved Lot</button>
          <br />
          <h1>Please select your parking space quantity.</h1>
          <br />
          <span style={{fontSize: '50px', color:'rgb(0, 130, 252)'}}>{this.props.spaceQuantity}</span>
          <br/>
          <button className='roundbutton' onClick={() => { this.decreaseSpaceQuantity() }}><img alt='' src={minus_icon} style={{height:'25px'}}/></button>
          <button className="roundbutton" onClick={() => { this.increaseSpaceQuanity() }}><img alt='' src={add_icon} style={{height:'25px'}}/></button>
          <br />
          <div className='nav'>
            <Link to="/wizard1">
              <img className='wizardnav' alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/search">
              <img className='wizardnav' alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/wizard3">
              <img className='wizardnav' alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
          </div> 

        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const { spaceType, spaceQuantity } = state;
  return {
    spaceType: spaceType,
    spaceQuantity: spaceQuantity
  }
}

export default connect(mapStateToProps, { updateWizSpaceType, updateWizSpaceQuantity })(Wizard2);