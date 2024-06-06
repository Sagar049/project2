import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import Card2 from './Card2';
import ArtistList from './ArtistList';
import './App.css';
import person4 from './images/thomas.png';

const artists = [
  {
    name: 'Thomas J.',
    handle: '@thecustomcreater',
    image: 'path/to/thomas.jpg',
    postImage: 'path/to/post.jpg',
  },
  // Add more artists as needed
];

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button className="filter-button">Filters</button>
        </div>
        <Card />
        {/* Render Card2 components for each artist */}
        {artists.map((artist, index) => (
          <Card2 key={index} artist={artist} />
        ))}
      </div>
      <ArtistList />
    </div>
  );
}

export default App;
