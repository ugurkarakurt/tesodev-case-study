import React, { useContext, useEffect, useState } from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';
import { SearchButtonContainer } from "./search-styles";
import SearchIcon from "./search-icon.svg";
import { RecordsContext } from '../../contexts/records.context';

const defaultSearchValue = {
  search: ''
};


const Search = () => {
  const { filteredRecords, searchRecord } = useContext(RecordsContext);
  const [searchField, setSearchField] = useState(defaultSearchValue);

  const { search } = searchField;

  const filteredRecordsLength = filteredRecords && filteredRecords.length

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSearchField({ ...searchField, [name]: value });
  };

  const resetFormFields = () => {
    setSearchField(defaultSearchValue);
  };

  useEffect(() => {
    searchRecord(search);
  }, [search])

  // useEffect(() => {
  //   resetFormFields()
  // }, [location.pathname]);

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
        value={search}
      />
      <SearchButtonContainer>
        <Button disabled={search.length < 2 || filteredRecordsLength < 1} link="/list" children={'Search'} type="button" />
      </SearchButtonContainer>
    </>
  )
}

export default Search;
