import React, { useState, useEffect, useRef } from "react";
import { BaseDropdown, OrderDropdown, DropDownHeader, DropDownBody, DropDownListItem } from "./dropdown.styles";

export const DROPDOWN_TYPE_CLASSES = {
  page: 'page',
  order: 'order'
};

const getDropdown = (dropdownType = DROPDOWN_TYPE_CLASSES.base) =>
({
  [DROPDOWN_TYPE_CLASSES.page]: BaseDropdown,
  [DROPDOWN_TYPE_CLASSES.order]: OrderDropdown,
}[dropdownType]);

const Dropdown = ({ children, dropdownType, selectedOption, onOptionClicked, options, isActive, icon }) => {
  const CustomDropdown = getDropdown(dropdownType);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <CustomDropdown ref={dropdownRef}>
      <img src={icon} alt="dropdown_icon" />
      <DropDownHeader onClick={toggling}>
        {selectedOption || children}
      </DropDownHeader>
      {isOpen && (
        <DropDownBody>
          {options.map((option) => (
            <DropDownListItem $isActive={option === isActive} onClick={() => onOptionClicked(option)} key={option}>
              {option}
            </DropDownListItem>
          ))}
        </DropDownBody>
      )}
    </CustomDropdown>
  );
}

export default Dropdown;

