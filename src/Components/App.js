import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import Header from './Header';

function App() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const filteredResults = results.filter(result => {
    return result.email.toLowerCase().indexOf(searchText) !== -1;
  });

  return (
    <header>
      <div className="header-inner-container">
        <Header />
        <SearchBar setSearchText={setSearchText} />
      </div>

      <Gallery results={filteredResults} setResults={setResults} />
    </header>
  );
}

export default App;
