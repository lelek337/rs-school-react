import React, { Component } from 'react';
import Search from '../search/Search';
import Cards from '../cards/Cards';

class MainPage extends Component {
  render() {
    return (
      <>
        <Search />
        <Cards data="cards" />
      </>
    );
  }
}

export default MainPage;
