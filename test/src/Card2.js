import React from 'react';
import './Card2.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';
import thomas from './images/thomas.png'


const Card2 = ({ artist }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="avatar" src={thomas} alt={`${artist.name} avatar`} />
        <div className="user-info">
          <h4>{artist.name}</h4>
          <p>{artist.handle}</p>
        </div>
        <MoreHorizIcon className="more-icon" />
      </div>
      <div className="card-content">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span></p>
        <img className="post-image" src={product4} alt="Post" />
      </div>
      <div className="card-footer">
        <div className="interaction">
          <FavoriteBorderIcon /> <span>9.8k</span>
        </div>
        <div className="interaction">
          <ChatBubbleOutlineIcon /> <span>8.6k</span>
        </div>
        <div className="interaction">
          <ShareIcon /> <span>7.2k</span>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <img src={product1} alt="Product 1" />
          <p>Modern Wall Decor Framed Painting</p>
          <p className="price">$199.99</p>
        </div>
        <div className="product">
          <img src={product2} alt="Product 2" />
          <p>Modern Wall Decor Framed Painting</p>
          <p className="price">$199.99</p>
        </div>
        <div className="product">
          <img src={product3} alt="Product 3" />
          <p>Modern Wall Decor Framed Painting</p>
          <p className="price">$199.99</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
