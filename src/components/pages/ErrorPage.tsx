import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from './error.gif';

class ErrorPage extends Component {

  render() {
    return (
      <div>
        <p>Page dosen't exist</p>
        <Link to={'/'}>Back to main page</Link>
        <img src={img} style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain',
        margin: '0 auto'}} alt="Error" />
      </div>
      
    )
    }
};

export default ErrorPage;