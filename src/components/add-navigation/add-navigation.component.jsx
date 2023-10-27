import React from 'react';
import Logo from '../logo/logo.component';
import { AddNavigationContainer, LogoContainer } from './add-navigation.styles';
import BackButton from '../back-button/back-button.component';

const AddNavigation = () => {

  return (
    <AddNavigationContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <BackButton />
    </AddNavigationContainer>
  );
}

export default AddNavigation;
