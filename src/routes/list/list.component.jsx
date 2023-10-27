import React, { useContext, useEffect } from 'react';
import ListNavigation from '../../components/list-navigation/list-navigation.component';
import ListItems from '../../components/list-items/list-items-component';
import { ListContainer } from './list.styles';
import { RecordsContext } from '../../contexts/records.context';

const List = () => {
  const { setPreviousPage } = useContext(RecordsContext);

  useEffect(() => {
    setPreviousPage("List Page")
  }, []);

  return (
    <ListContainer>
      <ListNavigation />
      <ListItems />
    </ListContainer>
  );
}

export default List;
