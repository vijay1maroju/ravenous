import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
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
    console.log('Searching Yelp with Pizza, Brooklyn, best_match');
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

/*import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [sortOption, setSortOption] = useState('best_match');

    const sortOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count",
    };

    const handleSearch = () => {
        //This will be further used to integrate with Yelp API.
        console.log(`Searching for ${searchTerm} in ${searchLocation}, sorted by: ${sortOption}.`);
    };

    const sortListItems = Object.entries(sortOptions).map(([label, value]) => {
        return (<li key={value} onClick={() => setSortOption(value)}>
                    {label}
                </li>);
    });

    return (
        <div className={styles.Full}>
            <div className={styles.list_container}>
                <ul className={styles.horizontal_list}>
                    {sortListItems}
                </ul>
            </div>   
            <div className={styles.inputBox_container}>
                <input
                className={styles.searchBox1} 
                type="text"
                placeholder="Search Businesses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                className={styles.searchBox2}
                type="text"
                placeholder="Where?"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                />
            </div>
            <div><button onClick={handleSearch} className={styles.searchButton}>Let's Go</button></div>
        </div>
    );
}

export default SearchBar;*/