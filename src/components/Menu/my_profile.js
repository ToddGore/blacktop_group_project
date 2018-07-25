import React, { Component } from "react";
import styled from 'styled-components'
import Nav from "../Nav/Nav";
import axios from 'axios'
// import "./my_profile.css";

export default class Myprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
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
  handleEdit() {
    this.setState({ edit: !this.state.edit })
  }
  componentDidMount() {
    axios.get('/auth/user').then(res => {
      this.setState({ user: res.data })
    })
  }

  render() {
    console.log('profile ', this.props)
    return (
      <ProfileCSS>
        <Nav />
        <div className="myprofile">
          <PicCSS>
            {" "}
            {/* Google Profile Pic */}
          </PicCSS>
          {/* <p>Google name will be displayed here</p> */}
          <InputCSS>
            <p>Tap an item to edit it</p>
            <br />
            <input
              placeholder="Username"
              disabled // Disables input to box
              type="username"
              className="input"
              name="username"
              value={this.state.username}
              onChange={e => {
                this.handleChange(e);
              }}
            />
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
            <input
              placeholder="Phone Number"
              type="phonenumber"
              className="input"
              name="phonenumber"
              value={this.state.phonenumber}
              onChange={e => {
                this.handleChange(e);
              }}
            />

          </InputCSS>
          {/* <button className='button'>Button</button> */}
          {/* <p>
            Needs edit buttons for each input and also a submit button after
            they have edited
          </p> */}
        </div>
      </ProfileCSS>
    );
  }
}


const ProfileCSS = styled.div`
    height: 100vh;
    padding-top: 10px;
    background-color: var(--appbackgroundcolor);
`

const PicCSS = styled.div`
    height: 150px;
    width: 150px;
    background-color: grey;
    border-radius: 50%;
    margin: auto;
`;

const InputCSS = styled.div`
      margin-top: 40px;
      & input {
        text-indent: 10px;
        margin: 5px 0;
        border-radius: 25px;
        /* border: 1px solid lightgray; */
        border-width: 0px;
        border:none;
        box-shadow: none;
        background-color: #EAECEE;
        padding: 5px; 
        width: 250px;
        height: 25px;
    }
`;