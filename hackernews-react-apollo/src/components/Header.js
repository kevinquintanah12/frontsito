import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo">
          PAISES DEL MUNDO
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/countries" className="nav-link">
          Countries
        </Link>
        <Link to="/create" className="nav-link">
          Create Country
        </Link>
        {authToken ? (
          <div className="logout" onClick={() => { localStorage.removeItem(AUTH_TOKEN); navigate(`/`); }}>
            Logout
          </div>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
