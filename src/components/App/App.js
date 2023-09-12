import './App.scss';
import Headline from '../Headline/Headline';
import Navigation from '../Navigation/Navigation';
import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (search) => {
    setSearchQuery(search)
    console.log(searchQuery)
  }
 
  return (
    <div className='app'>
      <Navigation handleSearch={handleSearch} />
      <main className='main-section' >
        <Headline />
      </main>
    </div>
  )
}

export default App;
