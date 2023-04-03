import React from 'react';
import { Link } from 'react-router-dom';
import img from './error.gif';

function ErrorPage() {
  return (
    <div>
      <p>Page dose not exist</p>
      <Link to="/">Back to main page</Link>
      <img
        src={img}
        style={{
          display: 'block',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        alt="Error"
      />
    </div>
  );
}

export default ErrorPage;
