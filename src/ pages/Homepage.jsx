import React from 'react';
import data from '../helper/data';
import '../styles/style.css';
import Picture from '../components/Picture';

const Homepage = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data.map((item, index) => (
          <Picture key={index} photographer={item.photographer} src={item.src} />
        ))}
      </div>
    </div>
  )
}

export default Homepage;