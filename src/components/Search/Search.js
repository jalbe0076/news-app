import './Search.scss';
import { useState } from 'react';

const Search = ({handleSearch}) => {
  const [searchInput, setSearchInput] = useState('');
  const searchSvg = (
    <svg className='search-icon' height="24" viewBox="0 -960 960 960" width="24">
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </svg>
  );

  const clearSearch = () => {
    setSearchInput('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchInput) {
      handleSearch(searchInput)
      clearSearch();
    }
  }

  return (
    <form className='search-container' onSubmit={(e) => handleSubmit(e)}>
      <input 
        className='search-input' 
        placeholder='Search' 
        type='text' 
        name='searchInput' 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
      />
      <button className='search-btn' onSubmit={(e) => handleSubmit(e)}>{searchSvg}</button>
    </form>
  )
}

export default Search;