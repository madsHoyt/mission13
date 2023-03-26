import React from 'react';
import './App.css';
import { useState } from 'react';
import TopBanner from './blah';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Maddy's React Website" />
      <MovieList />
    </div>
  );
}

export default App;
