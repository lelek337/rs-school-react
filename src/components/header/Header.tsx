import React, { Component} from "react";
import { Link } from "react-router-dom";

import "./header.scss";


class Header extends Component {

  render(): React.ReactNode {
    return (
      <div className="header">
        <button type="button"><Link to={'/us'}>About Us</Link></button>
        <button type="button"><Link to={'/'}>Main page</Link></button>
        <button type="button"><Link to={'/add'}>Add Card</Link></button>
      </div>
    )
  }
}

export default Header;