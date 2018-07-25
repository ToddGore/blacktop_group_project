import React from 'react';
import styled from 'styled-components';
import background from '../Images/small_map.png';
require('dotenv').config();

export default function Login() {
    return (
        <Main>
            {/* <img src={background} width="500px" height="800px" /> */}
            <Content>
                <a href={process.env.REACT_APP_LOGIN}>
                    <button>Login</button>
                </a>
            </Content>
        </Main>
    )
}


const Content = styled.div`
    background-image: url(${background});
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Main = styled.div`
    width: 369px;
    height: 661px;
    border: 3px solid skyblue;

`;