import React from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <button>Let's Go</button>
      </div>
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