import React from 'react';
import Search from '../search/Search';
import Cards from '../cards/Cards';

function MainPage() {
  return (
    <>
      <Search />
      <Cards data="cards" />
    </>
  );
}

export default MainPage;
