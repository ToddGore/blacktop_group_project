import React from 'react';
require('dotenv').config();


export default function Login() {
    return (
        <a href={process.env.REACT_APP_LOGIN}>
            <button>Login</button>
        </a>
    )

}

