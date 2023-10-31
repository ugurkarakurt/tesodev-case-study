import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RecordsContext } from '../../contexts/records.context';
import { AlertContext } from '../../contexts/alert.context';
import LocationIcon from './location-icon.svg';
import DeleteIcon from "./delete-icon.svg";
import EditIcon from "./edit-icon.svg";
import { ListItemContainer, ListItemIcon, ListItemLocation, ListItemCompany, ListItemAdress, ListItemInfo, ListItemName, ListItemNumber, DeleteButton, EditButton } from './list-item.styles';


const ListItem = ({ record }) => {
  const { removeRecordFromList, setItemToUpdate } = useContext(RecordsContext);
  const { showAlert } = useContext(AlertContext);
  const { nameSurname, company, date, country, city } = record;

  const location = useLocation();
  const navigate = useNavigate();
  const isListPage = location.pathname.startsWith('/list');

  const editItem = () => {
    setItemToUpdate(record);
    navigate('/add');
  };

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
        showAlert({
          isShow: true,
          alertType: 'success',
          title: 'The deletion was successful',
          description: `${nameSurname} has been successfully removed from the list.`,
          buttonContent: 'Correct',
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
          <EditButton onClick={editItem}>
            <img src={EditIcon} alt="edit_icon" />
          </EditButton>
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
