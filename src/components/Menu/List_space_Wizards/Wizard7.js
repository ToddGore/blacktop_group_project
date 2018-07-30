import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import cancel_icon from './../../newImages/cancel_icon.svg'
import rightarrow_icon from './../../newImages/rightarrow_icon.svg'
import leftarrow_icon from './../../newImages/leftarrow_icon.svg'
import { updateWizCash, updateWizCredit, updateWizVenmo, updateWizPaypal, updateWizApplePay, updateWizRate } from "../../../ducks/reducer";
import { connect } from "react-redux";

class Wizard7 extends Component {

  render() {
    const { updateWizCash, updateWizCredit, updateWizVenmo, updateWizPaypal, updateWizApplePay, updateWizRate } = this.props;
    // console.log(this.props.rate)
    return (
      <div className = "reset">
        <div className="wizard7">
          <h1>Please specify your hourly rate below.</h1>
          <input className="input" placeholder="Hourly Rate" type="number" onChange={(e) => { updateWizRate(Number(e.target.value)) }} />
          <br />

          <h1>Please specify below how you would like to be paid.</h1>
          <br />

          <input type="checkbox" id="Cash" name="cash" value="cash" className="" onChange={(e) => { updateWizCash(true) }} />
          <label htmlFor="Cash">Cash</label>
          <br />

          <input type="checkbox" id="Credit" className="" value="credit" name="credit" onChange={(e) => { updateWizCredit(true) }} />
          <label htmlFor="Credit">Credit</label>
          <br />

          <input type="checkbox" id="Venmo" className="" value="venmo" name="venmo" onChange={(e) => { updateWizVenmo(true) }} />
          <label htmlFor="Venmo">Venmo</label>
          <br />

          <input type="checkbox" id="Paypal" className="" value="paypal" name="paypal" onChange={(e) => { updateWizPaypal(true) }} />
          <label htmlFor="Paypal">Paypal</label>
          <br />

          <input type="checkbox" id="Apple Pay" className="" value="applepay" name="applepay" onChange={(e) => { updateWizApplePay(true) }} />
          <label htmlFor="Apple Pay">Apple Pay</label>
          <br />
          <div className='nav'>
            <Link to="/wizard6">
              <img className='wizardnav' alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/search">
              <img className='wizardnav' alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/wizard8">
              <img className='wizardnav' alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { cash, credit, venmo, paypal, applepay, rate } = state;
  return {
    cash: cash,
    credit: credit,
    venmo: venmo,
    paypal: paypal,
    applepay: applepay,
    rate: rate
  }
};

export default connect(mapStateToProps, { updateWizCash, updateWizCredit, updateWizVenmo, updateWizPaypal, updateWizApplePay, updateWizRate})(Wizard7);
