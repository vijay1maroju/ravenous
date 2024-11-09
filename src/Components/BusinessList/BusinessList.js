import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (props) => {
  return (
    <div className={styles.BusinessList}>
      {
        props.businesses.map((business) => {
            return <Business business={business} key={business.name}/>;
        })
      }
    </div>
  );
};

export default BusinessList;


/*import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

const businessDetails = [
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'ITALIAN',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'ITALIAN',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'ITALIAN',
        rating: 4.5,
        reviewCount: 90
    },
];

function BusinessList() {
    return (
        <div className={styles.businesses}>
            {businessDetails.map((business, index) => (
                <Business
                 key={index}
                 image={business.imageSrc}
                 name={business.name}
                 address={business.address}
                 city={business.city}
                 state={business.state}
                 zipcode={business.zipCode}
                 category={business.category}
                 rating={business.rating}
                 reviewCount={business.reviewCount}
                />
            ))}
        </div>
    );
}

export default BusinessList;*/