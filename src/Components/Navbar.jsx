import React from 'react';
import '../styles/Navbar.css'; // adjust path if needed


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="logo">PodcastRoom</h1>
        </div>
        <div className="navbar-right">
          <button className="sign-in-button">
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
