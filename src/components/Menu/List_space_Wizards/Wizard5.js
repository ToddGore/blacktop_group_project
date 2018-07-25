import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import backarrow from "./../../Images/backarrow.svg";
import nextarrow from "./../../Images/nextarrow.svg";
import cancelbutton from "./../../Images/cancelbutton.svg";
import { storage } from '../../Firebase/index';
import add_image_icon from '../../Images/add_image_icon.svg';
import {updateWizPicOne} from '../../../ducks/reducer';

export default class Wizard5 extends Component {
  
  handleCarPic(e) {
    if (e.target.files[0]) {
      const car_pic = e.target.files[0];
      const uploadTask = storage.ref(`main_images/${car_pic.name}`).put(car_pic);
      uploadTask.on('state_changed',
      () => {
        storage.ref('main_images').child(car_pic.name).getDownloadURL().then(url => {
          this.setState({ car_pic: url })
        })
      });
    }
  }
  
  
  render() {

    const {updateWizPicOne} = this.props;

    return (
      <div className="wizards">
        <div className="wizard5">

          <h1>Add Pictures</h1>
          <br />


          <div>
            <label htmlFor='picture_input'>
              <img src={add_image_icon} alt='' style={{ height: '150px' }} />
            </label>
            <input type='file' id='picture_input' onChange={(e) => { this.handleCarPic(e) }} style={{ display: 'none' }} />
          </div>



          <Link to="/wizard4">
            <img alt="" src={backarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/search">
            <img alt="" src={cancelbutton} style={{ height: "30px", width: "30px" }} />
          </Link>

          <Link to="/wizard6">
            <img alt="" src={nextarrow} style={{ height: "30px", width: "30px" }} />
          </Link>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { picOne } = state;
  return {
    picOne: picOne
  }
}

export default connect(mapStateToProps, { updateWizPicOne })(Wizard5);