import React from 'react'

export default function Gallery() {
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
