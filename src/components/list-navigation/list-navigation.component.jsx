import React, { useContext } from 'react';
import Button from '../button/button.component';
import Logo from '../logo/logo.component';
import Search from '../search/search-component';
import { ListNavigationContainer, ListAddButtonContainer, LogoContainer, ListPreviewSearchContainer } from './list-navigation.styles';
import { RecordsContext } from '../../contexts/records.context';

const ListNavigation = () => {
  const { setItemToUpdate } = useContext(RecordsContext);

  const handleClick = () => setItemToUpdate({});

  return (
    <ListNavigationContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <ListPreviewSearchContainer>
        <Search />
      </ListPreviewSearchContainer>
      <ListAddButtonContainer>
        <Button onClick={handleClick} children="Add new record" link={'/add'} type="button" />
      </ListAddButtonContainer>
    </ListNavigationContainer>
  );
}

export default ListNavigation;
