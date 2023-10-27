import React from 'react';
import LocationIcon from './location-icon.svg';
import { ListItemContainer, ListItemIcon, ListItemLocation, ListItemCompany, ListItemAdress, ListItemInfo, ListItemName, ListItemNumber } from './list-item.styles';
import { useLocation } from 'react-router-dom';

const ListItem = ({ record }) => {
  const { nameSurname, company, date, country, city } = record;

  const location = useLocation();
  const isListPage = location.pathname.startsWith('/list');

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
        <ListItemInfo>
          <ListItemName>{nameSurname}</ListItemName>
          <ListItemNumber>{date}</ListItemNumber>
        </ListItemInfo>
      )}
    </ListItemContainer>
  );
};

export default ListItem;
