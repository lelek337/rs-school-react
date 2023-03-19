import React, { Component} from "react";
import { Link } from "react-router-dom";

import "./header.scss";


class Header extends Component {

  render() {
    return (
      <div className="header">
        <button type="button"><Link to={'/us'}>About Us</Link></button>
        <button type="button"><Link to={'/'}>Main page</Link></button>
      </div>
    )
  }
}

export default Header;