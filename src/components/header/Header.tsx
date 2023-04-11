import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
  const [colorUs, setColorUs] = React.useState(false);
  const [colorMain, setColorMain] = React.useState(false);
  const onChengeColorUs = () => {
    setColorMain(false);
    setColorUs(true);
  };
  const onChengeColorMain = () => {
    setColorMain(true);
    setColorUs(false);
  };

  return (
    <div className="header">
      <button
        type="button"
        className={`ry-2 px-4 border bg-blue-${colorUs ? 400 : 300}`}
        onClick={onChengeColorUs}
      >
        <Link to="/us">About Us</Link>
      </button>
      <button
        type="button"
        className={`ry-2 px-4 border bg-blue-${colorMain ? 400 : 300}`}
        onClick={onChengeColorMain}
      >
        <Link to="/">Main page</Link>
      </button>
    </div>
  );
}

export default Header;
