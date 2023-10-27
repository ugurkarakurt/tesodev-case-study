import React, { useContext } from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';
import { SearchButtonContainer } from "./search-styles";
import SearchIcon from "./search-icon.svg";
import { RecordsContext } from '../../contexts/records.context';


const Search = () => {
  const { searchValue, setSearchValue, filteredRecords } = useContext(RecordsContext);

  const filteredRecordsLength = filteredRecords && filteredRecords.length

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value)
  };

  return (
    <>
      <img src={SearchIcon} alt="search_icon" />
      <Input
        children={'Search (e.g., Name, Company, Date, Email, Phone, Website, Country, City, ID)'}
        label={false}
        error={false}
        type='text'
        onChange={handleChange}
        name='search'
        value={searchValue}
      />
      <SearchButtonContainer>
        <Button disabled={searchValue.length < 2 || filteredRecordsLength < 1} link="/list" children={'Search'} type="button" />
      </SearchButtonContainer>
    </>
  )
}

export default Search;
