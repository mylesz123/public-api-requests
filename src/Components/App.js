import React from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import PopupModal from './PopupModal';

function App() {
  return (
    <>
      <header>
        <div className="header-inner-container">
          <div className="header-text-container">
            <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
          </div>

          <div className="search-container">
              <SearchBar />
          </div>
        </div>

        <div id="gallery" className="gallery">
          <Gallery />
        </div>

        {/* <PopupModal /> */}

      </header>
    </>
  );
}

export default App;
