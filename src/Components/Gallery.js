import React, { useState, useEffect } from 'react'

export default function Gallery() {
    // this is responsible for populating users 
    // use hook to get number of users to populate from api req
    // can map through card-img-container and add data from request
    const [results, setResults] = useState([]);
    const endpoint = "https://randomuser.me/api/?results=10";

    useEffect(() => {
        fetch(endpoint).then(
                res => res.json()
            ).then(
                data => {
                    setResults(data.results)
                }
            ).catch(
                error => console.log({"There was an error with your request":error.message, "check the stack":error.stack})
            )

        return () => setResults([])
        
    }, [])

    return (
        <>
            {results.map((result, index) => (
                <div className="card" key={result.login.md5}>
                    <div className="card-img-container">
                        <img className="card-img" src={result.picture.large} alt="profile avatar" />
                    </div>
                    <div className="card-info-container">
                        <h3 id="name" className="card-name cap">
                            {result.name.title ? result.name.title : ""} {result.name.first} {result.name.last}
                        </h3>
                        <p className="card-text">{result.email}</p>
                        <p className="card-text cap">{result.location.city}, {result.location.state}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
