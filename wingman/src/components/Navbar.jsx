import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../hooks/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">      
      {user ? (
        // Navigation links for authenticated users
        <div className="nav-sections">
          <ul className="navbar-links main-links">
            <li><Link to="/home">Home</Link></li>   
            <li><Link to="/wingman">Wingman</Link></li>
            <li><Link to="/takeoff">Takeoff</Link></li>
            <li><Link to="/landing">Landing</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        // Navigation links for non-authenticated users
        <ul className="navbar-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;