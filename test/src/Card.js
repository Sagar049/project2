import React from 'react';
import './Card.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="avatar" src={image1} alt="User avatar" />
        <div className="user-info">
          <h4>Lara Leones</h4>
          <p>@thewallart</p>
        </div>
        <MoreHorizIcon className="more-icon" />
      </div>
      <div className="card-content">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span></p>
        <img className="post-image" src={image2} alt="Post" />
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
    </div>
  );
};

export default Card;
