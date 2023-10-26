import React from 'react';
import Button from '../button/button.component';
import Logo from '../logo/logo.component';
import Search from '../search/search-component';
import { ListNavigationContainer, ListAddButtonContainer, LogoContainer, ListPreviewSearchContainer } from './list-navigation.styles';

const ListNavigation = () => {
  return (
    <ListNavigationContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <ListPreviewSearchContainer>
        <Search />
      </ListPreviewSearchContainer>
      <ListAddButtonContainer>
        <Button children="Add new record" type="button" />
      </ListAddButtonContainer>
    </ListNavigationContainer>
  );
}

export default ListNavigation;
