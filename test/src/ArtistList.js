import React from 'react';
import './ArtistList.css';
import image2 from './images/image2.png'
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import person1 from './images/person1.png';
import person2 from './images/person2.png';
import person3 from './images/person3.png';
import person4 from './images/person4.png';

const artists = [
  {
    name: 'Thomas Edward',
    handle: '@thewildwithyou',
    image: person4,
    backgroundImage: image6,
  },
  {
    name: 'Chris Doe',
    handle: '@thewildwithyou',
    image: person3,
    backgroundImage: image5,
  },
  {
    name: 'Emilie Jones',
    handle: '@thewildwithyou',
    image: person1,
    backgroundImage: image4,
  },
  {
    name: 'Jessica Williams',
    handle: '@thewildwithyou',
    image: person2,
    backgroundImage: image3,
  },
];

const ArtistList = () => {
  return (
    <div className="artist-list-container">
      <button className="seller-button">Become a Seller</button>
      <div className="tabs">
        <span className="active">Artists</span>
        <span>Photographers</span>
      </div>
      {artists.map((artist, index) => (
        <div
          key={index}
          className="artist-card"
          style={{ backgroundImage: `url(${artist.backgroundImage})` }}
        >
          <img src={artist.image} alt={`${artist.name}`} className="artist-profile-pic" />
          <div className="artist-info">
            <h3>{artist.name}</h3>
            <p>{artist.handle}</p>
          </div>
        </div>
      ))}
      <div className="footer">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/cookies">Cookie Notice</a>
      </div>
    </div>
  );
};

export default ArtistList;
