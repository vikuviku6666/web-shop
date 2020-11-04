import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faSearchDollar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchStyle } from '../styles/SearchStyle';
const Search: React.FC = () => {
  return (
    <SearchStyle>
      <label htmlFor="search">Search Movies:</label>
      <input type="search" id="search" name="search" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </SearchStyle>
  );
};

export default Search;
