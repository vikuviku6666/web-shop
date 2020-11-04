import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search: React.FC = () => {
  return (
    <div>
          <span>
            <FontAwesomeIcon icon={faSearch} /> 
            <input type="text"/>   
          </span>
     
      
    </div>
  );
};

export default Search;
