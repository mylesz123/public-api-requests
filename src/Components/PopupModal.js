import React from 'react'

export default function PopupModal({ results, closePopup, nextUser, prevUser, index }) {
    let selectedUser = results[index];

    return (
        <div className="modal-container">
            <div className="modal">
                <button
                    type="button"
                    id="modal-close-btn"
                    className="modal-close-btn"
                    onClick={closePopup}
                >
                    <strong>X</strong>
                </button>
                <div className="modal-info-container">
                    <img className="modal-img" src={selectedUser.picture.large} alt="profile avatar" />
                    <h3 id="name" className="modal-name cap">
                        {selectedUser.name.first} {selectedUser.name.last}
                    </h3>
                    <p className="modal-text">{selectedUser.email}</p>
                    <p className="modal-text cap">{selectedUser.location.city}, {selectedUser.location.state}</p>
                    <hr />
                    <p className="modal-text">{selectedUser.cell}</p>
                    <p className="modal-text">
                        {`${selectedUser.location.street.number} ${selectedUser.location.street.name}.,`}
                    </p>
                    <p className="modal-text">
                        {`${selectedUser.location.city}, ${selectedUser.location.state} ${selectedUser.location.postcode}`}
                    </p>
                    <p className="modal-text">Birthday: {selectedUser.dob.date}</p>
                </div>
            </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn" onClick={prevUser}>Prev</button>
                <button type="button" id="modal-next" class="modal-next btn" onClick={nextUser}>Next</button>
            </div>
        </div>
    )
}
