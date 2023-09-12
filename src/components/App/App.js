import './App.scss';
import Headline from '../Headline/Headline';
import Navigation from '../Navigation/Navigation';
import { useState, useEffect } from 'react';

function App() {
 
  return (
    <>
      <Navigation />
      <main className='app' >
        <Headline />
      </main>
    </>
  )
}

export default App;
