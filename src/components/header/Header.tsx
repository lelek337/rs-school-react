import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
  return (
    <div className="header">
      <button type="button" className="ry-2 px-4 border bg-blue-400">
        <Link to="/us">About Us</Link>
      </button>
      <button type="button" className="ry-2 px-4 border bg-blue-300">
        <Link to="/">Main page</Link>
      </button>
    </div>
  );
}

export default Header;
