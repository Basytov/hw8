import React from 'react'
import styled from "styled-components"
import Navigation from './Navigation';


const Header = (props) => {
  return (
    <HeaderStyle>
        <Logo>A Typical page</Logo>
        {props.isAuthenticated &&<Navigation userHandler={props.userHandler}
        onLogout={props.onLogout}
        onLogin={props.loginHandler}
        timerHandler={props.timerHandler}
        />}
    </HeaderStyle>
  )
}

export default Header;
const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
`;
const Logo = styled.h1`
  color: white;
`;