import React from 'react';
import styled from 'styled-components';
import background from '../Images/small_map.png';
require('dotenv').config();

export default function Login() {
    return (
        <div>
            {/* <img src={background} width="500px" height="800px" /> */}
            <div>
                <a href={process.env.REACT_APP_LOGIN}>
                    <button> <h1>Login</h1> </button>
                </a>
            </div>
        </div>
    )
}


// const Content = styled.div`
//     background-image: url(${background});
//     height: 100%; 
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     & button {
//         height: 210px;
//         width: 105px;
//         border: none;
//         background: url(${bigPin}) no-repeat;
//         margin-top: 50px;
//         background-size: 100px 200px;
//         outline:none;
//     }
//     & h1 {
//         font-size: 23px;
//         font-weight: bold;
//         padding-bottom: 70px;
//         padding-right: 5px;
//     }
// `;

// const Main = styled.div`
//     width: 375px;
//     height: 667px;
//     /* border: 3px solid skyblue; */

// `;