import React, { Fragment, useContext } from 'react';
import { RecordsContext } from '../../contexts/records.context';
import ListItem from "../list-item/list-item";
import Pagination from '../pagination/pagination.component';
import EmptyResult from '../empty-result/empty-result.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import { ListContainer, ListItemsContainer, ListItemsWrapper, Divider, ListActionsContainer } from './list-items.styles';
import Dropdown from '../dropdown/dropdown.component';

const ListItems = () => {
  const { filteredRecords, currentPage, itemsPerPage, setItemsPerPage, setSortingKey } = useContext(RecordsContext);

  const handleClickByItemsPerPage = (itemsRange) => setItemsPerPage(itemsRange)
  const handleClickByOrderItems = (orderValue) => setSortingKey(orderValue);

  return (
    <ListContainer>
      <ListItemsContainer>
        <LoadingSpinner />
        <EmptyResult />
        {filteredRecords && filteredRecords.length ? (
          <ListItemsWrapper>
            {filteredRecords
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((record) => (
                <Fragment key={record.id}>
                  <ListItem record={record} />
                  <Divider />
                </Fragment>
              ))}
          </ListItemsWrapper>
        ) : null}
        <Pagination />
      </ListItemsContainer>
      <ListActionsContainer>
        <Dropdown
          onOptionClicked={handleClickByItemsPerPage}
          selectedOption={itemsPerPage}
          title={"Results Rer Page"}
          options={[5, 10, 20, 50]} />
        <Dropdown
          onOptionClicked={handleClickByOrderItems}
          selectedOption={"Order By"}
          title={"Order By"}
          options={["Name ascending", "Name descending", "Company ascending", "Company descending"]}
        />
      </ListActionsContainer>
    </ListContainer>
  );
}

export default ListItems;