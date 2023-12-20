import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Card.css'
const Card = () => {
  const entries = [
    {
      name: 'Mahima Swarnkar',
      imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/person.png',
      stars: 4,
      quote: 'The way they work is very nice.',
    },
    {
      name: 'Anurag Agrwal',
      imgSrc: 'https://res.cloudinary.com/dgiwpmom5/image/upload/v1664103584/istockphoto-912922804-612x612_u9iw0y.jpg',
      stars: 4,
      quote: 'Man, I think this app freaking rocks and stuff. Dude.',
    },
    {
        name: 'Anurag Agrwal',
        imgSrc: 'https://res.cloudinary.com/dgiwpmom5/image/upload/v1664103584/istockphoto-912922804-612x612_u9iw0y.jpg',
        stars: 4,
        quote: 'Man, I think this app freaking rocks and stuff. Dude.',
      },{
        name: 'Anurag Agrwal',
        imgSrc: 'https://res.cloudinary.com/dgiwpmom5/image/upload/v1664103584/istockphoto-912922804-612x612_u9iw0y.jpg',
        stars: 4,
        quote: 'Man, I think this app freaking rocks and stuff. Dude.',
      },{
        name: 'Anurag Agrwal',
        imgSrc: 'https://res.cloudinary.com/dgiwpmom5/image/upload/v1664103584/istockphoto-912922804-612x612_u9iw0y.jpg',
        stars: 4,
        quote: 'Man, I think this app freaking rocks and stuff. Dude.',
      },
    
  ];

  return (
    <div>
      <h3> Our Amazing Customers</h3>
    <div className="items"> {/* Add className="items" for the scrollable container */}
      {entries.map((entry, index) => (
        <div className="entry" key={index}>
          <p className="name">{entry.name}</p>
          <img src={entry.imgSrc} alt="Smiling chick" />
          <p className="quote">{entry.quote}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
