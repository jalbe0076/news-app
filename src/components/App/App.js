import './App.scss';
import Headline from '../Headline/Headline';
import Navigation from '../Navigation/Navigation';
import { useState, useEffect } from 'react';

function App() {
 
  return (
    <div className='app'>
      <Navigation />
      <main className='main-section' >
        <Headline />
      </main>
    </div>
  )
}

export default App;
