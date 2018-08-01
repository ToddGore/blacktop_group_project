import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUser } from './../../ducks/reducer'
import Nav from "../Nav/Nav";
import axios from 'axios'



class Myprofile extends Component {
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
      this.props.getUser()
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="myprofile">
          {this.state.edit ?
            <div className='card'>
              <div>
                <img alt='' src={this.props.user.user_pic} style={{ height: "150px", borderRadius: "50%", margin: '20px auto 50px auto', display: 'block' }} />
              </div>
              <p>Name: {this.props.user.username}</p>
              <hr />
              Username: <input type="username" className="input" name="username" value={this.state.username} onChange={e => { this.handleChange(e) }} />
              <hr />
              Email: <input type="email" className="input" name="email" value={this.state.email} onChange={e => { this.handleChange(e) }} />
              <hr />
              Phonenumber: <input type="phonenumber" className="input" name="phonenumber" value={this.state.phonenumber} onChange={e => { this.handleChange(e); }} />
              <hr />
              <button className='smallbutton' onClick={() => { this.handleEdit() }}>Cancel</button>
              <button className='smallbutton'>Submit</button>
            </div>
            :
            <div className='card'>
              <div>
                <img alt='' src={this.props.user.user_pic} style={{ height: "150px", borderRadius: "50%", margin: '20px auto 50px auto', display: 'block' }} />
              </div>
              <text>Name: {this.props.user.username}</text>
              <hr />
              <text>Username: </text>
              <hr />
              <text>Email:</text>
              <hr />
              <text>Phonenumber:</text>
              <hr />
              <button className='smallbutton' onClick={() => { this.handleEdit() }}>Edit</button>
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


