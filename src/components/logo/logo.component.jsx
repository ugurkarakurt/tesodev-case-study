import React from 'react';
import HomeLogo from './home-logo.jpeg';
import { SiteLogo } from './logo.styles';

const Logo = () => {
  return (
    <SiteLogo>
      <img src={HomeLogo} alt="home_logo" />
      <span>Search app</span>
    </SiteLogo>
  )
}

export default Logo;