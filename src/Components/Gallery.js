import React, { useState, useEffect } from 'react';
import PopupModal from './PopupModal';

export default function Gallery() {
    const [results, setResults] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [index, setIndex] = useState(0);

    const resultsToDisplay = 15
    const endpoint = `https://randomuser.me/api/?results=${resultsToDisplay}`;

    const logError = (functionName , error, extraData) => {
        console.error(
            error, 
            [functionName], 
            extraData
        )
    }

    useEffect(() => {
        fetch(endpoint).then(
                res => res.json()
            ).then(
                data => {
                    setResults(data.results)
                }
            ).catch(
                error => logError(
                    error, 
                    "Gallery useEffect line 14", 
                    {"Extra info" : endpoint}
                )
            )

        return () => setResults([])
        
    }, [endpoint])

    const showSelectedUser = (result, i) => {
        setSelectedUser(result)
        setIndex(i);
    }

    const closePopup = () => {
        setSelectedUser();
        setIndex(0);
    }

    const nextUser = () => {
        console.log("clicked next user");
        index !== results.length -1 && setIndex(prev => prev + 1);
    }

    const prevUser = () => {
        index !== 0 && setIndex(prev => prev - 1);
    }

    return (
        <div id="gallery" className="gallery">
            {results.map((result, index) => (
                <div className="card" key={result.login.md5} onClick={() => showSelectedUser(result, index)}>
                    <div className="card-img-container">
                        <img className="card-img" src={result.picture.large} alt="profile avatar" />
                    </div>
                    <div className="card-info-container">
                        <h3 id="name" className="card-name cap">
                            {result.name.title ? result.name.title : ""}. {result.name.first} {result.name.last}
                        </h3>
                        <p className="card-text">{result.email}</p>
                        <p className="card-text cap">{result.location.city}, {result.location.state}</p>
                    </div>
                </div>
            ))}

            {selectedUser !== undefined && 
                <PopupModal 
                    results={results}
                    closePopup={closePopup}
                    nextUser={nextUser}
                    prevUser={prevUser}
                    index={index} 
                />
            }
        </div>
    )
}
