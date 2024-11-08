import React from 'react';
import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className={styles.App}>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
