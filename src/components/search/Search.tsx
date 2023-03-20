import React, { Component, FormEvent } from 'react';
import { IoMdImages, IoMdSearch, IoMdPaper, IoMdFilm } from 'react-icons/io';

import './search.scss';

class Search extends Component {

  state = {
    searchValue: ''
  };

  onChengeValue = (event: any) => {
    const target = event.target as HTMLInputElement;
    this.setState( {searchValue: target.value});
    localStorage.setItem('searchValue', this.state.searchValue)
  }

  render() {
    return (
      <div className="search">
        <h2>Google Powered</h2>
        <h3>Site Search</h3>
          <form>
            <div className="text-input">
              <div className="input-text-icon">
                <IoMdSearch/>
                <input type="text" className='text' onChange={this.onChengeValue}/>
              </div>
              <button type="button">SEARCH</button>
            </div>
            <div className="radio-end-link">
              <div className="radio-buttons">
                <input type="radio" id="tutorialzine"/>
                <label htmlFor="tutorialzine">Search tutorialzine.com</label>
                <input type="radio" id="web"/>
                <label htmlFor="web">Search The Web</label>
              </div>
              <div className="link-button">
                <a href="#"><IoMdSearch/></a>
                <a href="#"><IoMdImages/></a>
                <a href="#"><IoMdPaper/></a>
                <a href="#"><IoMdFilm/></a>
              </div>
            </div>        
          </form>
      </div>
    )
  }

 
}

export default Search;