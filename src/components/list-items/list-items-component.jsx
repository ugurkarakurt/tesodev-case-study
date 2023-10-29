import React, { Fragment, useContext } from 'react';
import { RecordsContext } from '../../contexts/records.context';
import ListItem from '../list-item/list-item';
import Pagination from '../pagination/pagination.component';
import EmptyResult from '../empty-result/empty-result.component';
import Dropdown from '../dropdown/dropdown.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import OrderIcon from "./order.svg";
import PageIcon from "./page.svg";
import { ListContainer, ListItemsContainer, ListItemsWrapper, Divider, ListActionsContainer } from './list-items.styles';

const ListItems = () => {
  const { filteredRecords, currentPage, itemsPerPage, setItemsPerPage, setSortingKey, sortingKey } = useContext(RecordsContext);

  const handleClickByItemsPerPage = (itemsRange) => setItemsPerPage(itemsRange);
  const handleClickByOrderItems = (orderValue) => setSortingKey(orderValue);


  return (
    <ListContainer>
      <ListItemsContainer>
        <LoadingSpinner />
        <EmptyResult />
        {filteredRecords && filteredRecords.length > 0 && (
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
        )}
        <Pagination />
      </ListItemsContainer>
      <ListActionsContainer>
        {filteredRecords && (filteredRecords.length >= itemsPerPage) && (<Dropdown
          children={'Results Per Page'}
          dropdownType={"page"}
          onOptionClicked={handleClickByItemsPerPage}
          selectedOption={itemsPerPage}
          options={[5, 10, 20, 50]}
          isActive={itemsPerPage}
          icon={PageIcon}
        />)}

        {filteredRecords && (filteredRecords.length > 1) && (<Dropdown
          children={'Order By'}
          dropdownType={"order"}
          onOptionClicked={handleClickByOrderItems}
          selectedOption={sortingKey}
          options={["Name ascending", "Name descending", "Date ascending", "Date descending"]}
          isActive={sortingKey}
          icon={OrderIcon}
        />)}
      </ListActionsContainer>
    </ListContainer>
  );
}

export default ListItems;