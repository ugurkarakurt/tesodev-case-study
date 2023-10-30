import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RecordsContext } from '../../contexts/records.context';
import { AlertContext } from '../../contexts/alert.context';
import { removeRecord } from '../../utils/filter/filter.utils';
import LocationIcon from './location-icon.svg';
import DeleteIcon from "./delete-icon.svg";
import { ListItemContainer, ListItemIcon, ListItemLocation, ListItemCompany, ListItemAdress, ListItemInfo, ListItemName, ListItemNumber, DeleteButton } from './list-item.styles';


const ListItem = ({ record }) => {
  const { filteredRecords, setFilteredRecords, removeRecordFromList } = useContext(RecordsContext);
  const { showAlert } = useContext(AlertContext);
  const { nameSurname, company, date, country, city } = record;

  const location = useLocation();
  const isListPage = location.pathname.startsWith('/list');

  const removeItem = () =>
    removeRecordFromList(record)
      .then((response) => {
        if (response.error_code) {
          showAlert({
            isShow: true,
            alertType: 'danger',
            title: "An error occurred during the deletion process",
            description: response.message,
            buttonContent: 'Error',
          });
          return;
        }
        setFilteredRecords(removeRecord(filteredRecords, record));
        showAlert({
          isShow: true,
          alertType: 'success',
          title: 'The deletion was successful',
          description: `${nameSurname} has been successfully removed from the list.`,
          buttonContent: 'Error',
        });
      });

  return (
    <ListItemContainer $ispath={isListPage}>
      <ListItemIcon>
        <img src={LocationIcon} alt="location_icon" />
      </ListItemIcon>
      <ListItemLocation>
        <ListItemCompany>{company}</ListItemCompany>
        <ListItemAdress>{city}, {country}</ListItemAdress>
      </ListItemLocation>
      {isListPage && (
        <>
          <DeleteButton onClick={removeItem}>
            <img src={DeleteIcon} alt="delete_icon" />
          </DeleteButton>
          <ListItemInfo>
            <ListItemName>{nameSurname}</ListItemName>
            <ListItemNumber>{date}</ListItemNumber>
          </ListItemInfo>
        </>
      )}
    </ListItemContainer>
  );
};

export default ListItem;
