import React, { Fragment, useContext } from 'react';
import { RecordsContext } from '../../contexts/records.context';
import ListItem from "../list-item/list-item";
import Pagination from '../pagination/pagination.component';
import EmptyResult from '../empty-result/empty-result.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import { ListContainer, ListItemsContainer, ListItemsWrapper, Divider, ListActionsContainer } from './list-items.styles';

const ListItems = () => {
  const { filteredRecords, currentPage, itemsPerPage } = useContext(RecordsContext);

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
        <div className="page-length">
          <select name="page-length" id="pageLength"> // Select Optionları component ypaacaksın yarın
            <option value="5">5</option>
            <option value="5">10</option>
            <option value="5">20</option>
            <option value="5">50</option>
          </select>
        </div>
        <div className="list-order">
          <select name="list-order" id="listOrder">
            <option value="">Order By</option>
            <option value="5">Name ascending</option>
            <option value="5">Name descending</option>
            <option value="5">Year ascending</option>
            <option value="5">Year descending</option>
          </select>
        </div>
      </ListActionsContainer>
    </ListContainer>
  );
}

export default ListItems;