import React from 'react';
import Button from '../button/button.component';
import { HomeNavigationContainer, HomeAddButtonContainer, LogoContainer } from './home-navigation.styles';
import Logo from '../logo/logo.component';

const HomeNavigation = () => {
  return (
    <HomeNavigationContainer>
      <HomeAddButtonContainer>
        <Button children="Add new record" type="button" />
      </HomeAddButtonContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
    </HomeNavigationContainer>
  );
};

export default HomeNavigation;
