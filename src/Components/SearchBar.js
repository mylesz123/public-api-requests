import React from 'react'

export default function SearchBar({ setSearchText }) {
    return (
        <div className="search-container">
            <form action="#" method="get">
                <input 
                    type="search" 
                    id="search-input" 
                    className="search-input" 
                    placeholder="Search..." 
                    onInput={(e) => setSearchText(e.target.value)}
                />
            </form>
        </div>
    )
}
