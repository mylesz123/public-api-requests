import React from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import Header from './Header';

function App() {
  return (
    <>
      <header>
        <div className="header-inner-container">
          <Header />
          <SearchBar />
        </div>

        <Gallery />
      </header>
    </>
  );
}

export default App;
