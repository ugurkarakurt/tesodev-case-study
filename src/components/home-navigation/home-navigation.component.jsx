import React, { useContext } from 'react';
import Button from '../button/button.component';
import { HomeNavigationContainer, HomeAddButtonContainer, LogoContainer } from './home-navigation.styles';
import Logo from '../logo/logo.component';
import { RecordsContext } from '../../contexts/records.context';

const HomeNavigation = () => {
  const { setItemToUpdate } = useContext(RecordsContext);

  const handleClick = () => setItemToUpdate({});

  return (
    <HomeNavigationContainer>
      <HomeAddButtonContainer>
        <Button onClick={handleClick} children="Add new record" link={'/add'} type="button" />
      </HomeAddButtonContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
    </HomeNavigationContainer>
  );
};

export default HomeNavigation;
