import React from "react";
import styles from "./Business.module.css";

/*const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};*/  

const Business = (props) => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={props.business.imageSrc} alt="" />
      </div>
      <h2>{props.business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{props.business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${props.business.rating} stars`}</h3>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;

/*import React from 'react';
import styles from './Business.module.css';

function Business({ image, name, address, city, state, zipcode, category, rating, reviewCount }) {
  return (
    <div className={styles.business}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{address}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<span className={styles.food-category}>{category}</span></p> 
      <p>{city}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<span className={styles.rating}>{rating} stars</span></p> 
      <p>{state}&nbsp;{zipcode}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<span className={styles.reviews}> {reviewCount} reviews</span></p>
      <p> </p>
    </div>
    );
}

export default Business;*/