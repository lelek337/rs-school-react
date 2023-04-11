import * as React from 'react';
import { IoMdImages, IoMdSearch, IoMdPaper, IoMdFilm } from 'react-icons/io';
import searchCards from '../searchCards/searchCrads';
import { searchGoods } from '../../constans/constans';
import { Icard } from '../../types/interfaces';

import './search.scss';

interface IsearchProps {
  onCardsGoods: (data: Icard[]) => void;
}

function Search({ onCardsGoods }: IsearchProps) {
  const [searchValue, setSearchValue] = React.useState('');
  const [valid, setValid] = React.useState(true);

  const onChengeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearchValue(target.value);
    if (searchValue.trim().length > 2) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    searchCards(searchValue);
    onCardsGoods(searchGoods);
    setSearchValue('');
  };
  return (
    <div className="search">
      <h2>Product Search</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        {valid ? (
          <p className="text-red-500">Tthe number of characters must be more than three</p>
        ) : null}
        <div className="text-input">
          <div className="input-text-icon">
            <IoMdSearch />
            <input type="text" className="text" onChange={onChengeValue} value={searchValue} />
          </div>
          <button type="button" onClick={() => handleSubmit()}>
            SEARCH
          </button>
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
