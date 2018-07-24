import React, { Component } from "react";

import Nav from "../Nav/Nav";
import "./my_profile.css";
import axios from 'axios'

export default class Myprofile extends Component {
  constructor() {
    super();

    this.state = {
      user:{},
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
      this.setState({user: res.data})
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="myprofile">
          <img
            alt=''
            src={this.state.user.user_pic}
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              margin: "auto"
            }}
          />
          <hr/>
          <p>Name: {this.state.user.username}</p>
          <hr/>
          {this.state.edit ?
              <input
                placeholder="Username"
                type="username"
                className="input"
                name="username"
                value={this.state.username}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            : 
              <p>Username: </p>
          }
          <hr/>
          {this.state.edit ? 
              <input
                placeholder="Email"
                type="email"
                className="input"
                name="email"
                value={this.state.email}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            :
              <p>Email:</p>
          }
          <hr/>
          {this.state.edit ? 
              <input
                placeholder="Phonenumber"
                type="phonenumber"
                className="input"
                name="phonenumber"
                value={this.state.phonenumber}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            :
              <p>Phonenumber:</p>
          }
          <hr/>
          {this.state.edit ?
              <div> 
                <button className='button' onClick = {() => {this.handleEdit()}}>Cancel</button>
                <button className='button'>Submit</button>
              </div>
            :
              <button className='button' onClick = {() => {this.handleEdit()}}>Edit</button>
          }
        </div>
      </div>
    );
  }
}
