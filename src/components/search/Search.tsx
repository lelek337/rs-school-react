import * as React from 'react';
import { IoMdImages, IoMdSearch, IoMdPaper, IoMdFilm } from 'react-icons/io';

import './search.scss';

function Search() {
  const [searchValue, setSearchValue] = React.useState('');

  const onChengeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearchValue(target.value);
    localStorage.setItem('searchValue', searchValue);
  };

  return (
    <div className="search">
      <h2>Google Powered</h2>
      <h3>Site Search</h3>
      <form>
        <div className="text-input">
          <div className="input-text-icon">
            <IoMdSearch />
            <input type="text" className="text" onChange={onChengeValue} />
          </div>
          <button type="button">SEARCH</button>
        </div>
        <div className="radio-end-link">
          <div className="radio-buttons">
            <input type="radio" id="tutorialzine" />
            <label htmlFor="tutorialzine">Search tutorialzine.com</label>
            <input type="radio" id="web" />
            <label htmlFor="web">Search The Web</label>
          </div>
          <div className="link-button">
            <i>
              <IoMdImages />
            </i>
            <i>
              <IoMdPaper />
            </i>
            <i>
              <IoMdFilm />
            </i>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
