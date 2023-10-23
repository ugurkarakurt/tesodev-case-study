import React from 'react';
import LocationIcon from "./location-icon.svg";
import { ListItemContainer, ListItemIcon, ListItemLocation, ListItemCompany, ListItemAdress, ListItemInfo, ListItemName, ListItemNumber } from "./list-item.styles";
import { useLocation } from 'react-router-dom';

const ListItem = ({ record }) => {
  const { nameSurname, company, phone, country, city } = record;

  const location = useLocation();
  const path = location.pathname.startsWith('/list');

  return (
    <ListItemContainer $ispath={path}>
      <ListItemIcon>
        <img src={LocationIcon} alt="location_icon" />
      </ListItemIcon>
      <ListItemLocation>
        <ListItemCompany>{company}</ListItemCompany>
        <ListItemAdress>{city}, {country}</ListItemAdress>
      </ListItemLocation>
      {
        path && (
          <ListItemInfo>
            <ListItemName>{nameSurname}</ListItemName>
            <ListItemNumber>{phone}</ListItemNumber>
          </ListItemInfo>
        )
      }
    </ListItemContainer>
  )
}

export default ListItem;