import React, { useState, useEffect } from 'react'

export default function Gallery() {
    // this is responsible for populating users 
    // use hook to get number of users to populate from api req
    // can map through card-img-container and add data from request
    const [results, setResults] = useState([]);
    const amountToFetch = 10;
    const endpoint = `https://randomuser.me/api/?results=${amountToFetch}`;

    useEffect(() => {
        fetch(endpoint).then(
                res => res.json()
            ).then(
                data => {
                    setResults(prev => [...prev, data.results])
                }
            ).catch(
                error => console.log({"There was an error with your request":error.message, "check the stack":error.stack})
            )
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src="https://placehold.it/90x90" alt="profile avatar" />
            </div>
            <div className="card-info-container">
                <h3 id="name" className="card-name cap">first last</h3>
                <p className="card-text">email</p>
                <p className="card-text cap">city, state</p>
            </div>

            {/* <!-- ======================
            Gallery markup:
            You can use the commented out markup below as a template
            for each of your Gallery items, but you must use JS to
            create and append them to the `gallery` div.
            IMPORTANT: Altering the arrangememnt of the markup and the
            attributes used may break the styles or functionality.
            ======================= --> */}
        </div>
    )
}
