import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo_colored.png'

import {
  ConnectButton,
  useConnect,
} from '@connect2ic/react'
export default function NavBar() {
  const { principal } = useConnect()
  return (
    <Nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/create">
            Create Item
          </Link>
        </div>
        <div className='d-flex align-items-center h100'>
          {
            principal &&
            <div className='wallet_id'>{principal}</div>
          }
          <ConnectButton />
        </div>
      </div>
    </Nav>
  )
}


const Nav = styled.nav`
  height: 60px;
  border-bottom: 1px solid #ccc;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .connect-button {
    background-image: linear-gradient(45deg, #ff00aa, #3f35ff);
    color: #fff;
    border-radius: 10px;
    border: 0px;
    padding: 5px 15px;
  }
  .wallet_id{
    width: 100px;
    height: 35px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 3px solid #000;
    border-radius: 30px;
    padding: 0px 10px;
    margin-right: 15px;
  }
`
