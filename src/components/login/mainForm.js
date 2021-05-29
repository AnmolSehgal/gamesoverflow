import React from 'react'
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import './accountBox/main.css'
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default Login;



