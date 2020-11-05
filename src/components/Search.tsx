import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchStyle } from '../styles/SearchStyle';
const Search: React.FC = () => {
  return (
    <SearchStyle>
      <input type="search"  id="search" name="search" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>
    </SearchStyle>
  );
};

export default Search;
