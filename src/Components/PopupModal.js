import React from 'react'

export default function PopupModal() {
    return (
        <div className="modal-container">
            <div className="modal">
                <button type="button" id="modal-close-btn" className="modal-close-btn"><strong>X</strong></button>
                <div className="modal-info-container">
                    <img className="modal-img" src="https://placehold.it/125x125" alt="profile avatar" />
                    <h3 id="name" className="modal-name cap">name</h3>
                    <p className="modal-text">email</p>
                    <p className="modal-text cap">city</p>
                    <hr />
                    <p className="modal-text">(555) 555-5555</p>
                    <p className="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p className="modal-text">Birthday: 10/21/2015</p>
                </div>
            </div>
            {/* // IMPORTANT: Below is only for exceeds tasks */}
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>

            {/* <!-- =======================
            Modal markup:
            You can use the commented out markup below as a template
            for your modal, but you must use JS to create and append
            it to `body`.
            IMPORTANT: Altering the arrangememnt of the markup and the
            attributes used may break the styles or functionality.
            ======================== --> */}
        </div>
        
    )
}
