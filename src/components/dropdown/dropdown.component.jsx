import React, { useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, DropDownListItem } from "./dropdown.styles";

export default function Dropdown({ selectedOption, onOptionClicked, title, options, }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || title}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <DropDownListItem onClick={() => onOptionClicked(option)} key={Math.random()}>
                {option}
              </DropDownListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}