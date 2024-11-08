import React from 'react';
import styles from './Business.module.css';

function Business({ image, name, address, city, state, zipcode, category, rating, reviewCount }) {
    return (
      <div className={styles.business}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{address}, {city}, {state} {zipcode}</p>
        <p className={styles.food-category}>Category: {category}</p>
        <p><span className={styles.rating}>Rating: {rating}</span> <span className={styles.reviews}>stars ({reviewCount} reviews</span> )</p>
      </div>
    );
  }

export default Business;