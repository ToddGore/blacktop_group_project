import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUser } from './../../ducks/reducer'

import Nav from "../Nav/Nav";
import "./my_profile.css";
import axios from 'axios'

class Myprofile extends Component {
  constructor() {
    super();

    this.state = {
      profilepicture: "",
      googlename: "",
      username: "",
      email: "",
      phonenumber: "",
      edit: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleEdit(){
    this.setState({edit: !this.state.edit})
  }
  componentDidMount(){
    axios.get('/auth/user').then(res => {
      this.props.getUser()
    })
  }

  render() {
    console.log(this.props.user)
    return (
      <div>
        <Nav />
        <div className="myprofile">
          <img alt='' src={this.props.user.user_pic} style={{height: "150px", borderRadius: "50%", margin: "auto", marginTop:'30px'}}/>
          {this.state.edit ?
              <div style={{textAlign: 'left', padding: '20px'}}> 
                <p>Name: {this.props.user.username}</p>
                <hr/>
                Username: <input type="username" className="input" name="username" value={this.state.username} onChange={e => {this.handleChange(e)}}/>
                <hr/>
                Email: <input type="email" className="input" name="email" value={this.state.email} onChange={e => {this.handleChange(e)}}/>
                <hr/>
                Phonenumber: <input type="phonenumber" className="input" name="phonenumber" value={this.state.phonenumber} onChange={e => {this.handleChange(e);}}/>
                <hr/>
                <button className='button' onClick = {() => {this.handleEdit()}}>Cancel</button>
                <button className='button'>Submit</button>
              </div>
            : 
            <div style={{textAlign: 'left', padding: '20px'}}>
                <p>Name: {this.props.user.username}</p>
                <hr/>
                <p>Username: </p>
                <hr/>
                <p>Email:</p>
                <hr/>
                <p>Phonenumber:</p>
                <hr/>
                <button className='button' onClick = {() => {this.handleEdit()}}>Edit</button>
              </div> 
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
   user: user
  }
}

export default connect(mapStateToProps, { getUser })(Myprofile);