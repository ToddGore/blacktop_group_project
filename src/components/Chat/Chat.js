import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUser } from '../../ducks/reducer'


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.sendMail = this.sendMail.bind(this)
    }

    componentDidMount() {
        this.props.getUser().then(
            this.setState({
                logged_user_name: '',
                logged_user_email: '',

            })
        )

    }



    sendMail(e) {
        e.preventDefault()
        axios.post('/api/sendmail', {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }).then(res => {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        })
    }

    render() {
        console.log('Chat Props ', this.props.user);

        return (
            <div className="chat-main">
                <form id="contact-form" onSubmit={this.sendMail} >
                    <div className="form-group">
                        <label >User Name</label>
                        <p className="">{this.props.user.username}</p>
                        <br />

                    </div>
                    <div className="form-group">
                        <label >Email Address</label>
                        <p className="">{this.props.user.email}</p>
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            value={this.state.subject}
                            onChange={e => this.setState({ subject: e.target.value })}
                            // className="form-control"
                            className="input"
                            id="subject" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            // className="form-control"
                            className="txtarea"
                            value={this.state.message} onChange={e => this.setState({ message: e.target.value })}
                            rows="5"
                            id="message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        // className="btn-primary"
                        className="smallbutton"
                    >Submit</button>
                </form>
            </div>
        )
    }
}



function mapStateToProps(state) {
    const { user } = state;
    return {
        user: user
    }
}

export default connect(mapStateToProps, { getUser })(Chat);