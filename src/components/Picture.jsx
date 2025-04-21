import React from 'react';

const Picture = ({ photographer, src }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={src.large} alt={photographer} />
      </div>
      <div className="info">
        <p>{photographer}</p>
      </div>
    </div>
  )
}

export default Picture;