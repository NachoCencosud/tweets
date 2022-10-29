import React from 'react'
import logo from "../../assets/images/twitter-logo.png"
import "./Header.scss";

const Header = () => {
  return (
    <div className='header-container'>
      <p className='text-header'>Tweets for you life</p>
      <img className='logo-header' src={logo} />
    </div>
  )
}

export default Header