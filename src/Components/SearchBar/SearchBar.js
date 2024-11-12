import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortingOption, setSortingOption] = useState('Best Match');

  const getSortByClass = (sortByOption) => {
    if (sortingOption === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortingOption(sortByOption);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    props.searchYelp(searchTerm, searchLocation, sortingOption);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={handleSearchTermChange}/>
          <input placeholder="Where?" onChange={handleLocationChange}/>
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type='submit'>Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;