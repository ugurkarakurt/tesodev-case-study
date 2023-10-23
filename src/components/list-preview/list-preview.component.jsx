import React, { Fragment, useContext } from 'react';
import { RecordsContext } from '../../contexts/records.context';
import ListItem from '../list-item/list-item';
import { ListPreviewContainer, ListPreviewTitle, ListPreviewSearchContainer, ListPreviewWrapper, ShowMore, ShowMoreLink, Divider } from "./list-preview.styles";
import Search from '../search/search-component';
import EmptyResult from '../empty-result/empty-result.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';


const ListPreview = () => {
  const { filteredRecords } = useContext(RecordsContext);

  return (
    <ListPreviewContainer>
      <ListPreviewTitle>
        Find in records
      </ListPreviewTitle>
      <ListPreviewSearchContainer>
        <Search />
      </ListPreviewSearchContainer>

      <LoadingSpinner />
      <EmptyResult />

      {filteredRecords && filteredRecords.length ? (
        <ListPreviewWrapper>
          {filteredRecords
            .filter((_, idx) => idx < 3)
            .map((record, index) => (
              <Fragment key={record.id}>
                <Divider $index={index}></Divider>
                <ListItem record={record} />
              </Fragment>
            ))}
          <ShowMore>
            <ShowMoreLink to="/list">
              Show More...
            </ShowMoreLink>
          </ShowMore>
        </ListPreviewWrapper>
      ) : null}
    </ListPreviewContainer>
  )
}

export default ListPreview;