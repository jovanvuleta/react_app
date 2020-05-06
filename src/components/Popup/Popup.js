import React from 'react';
import './Popup.scss'

const Popup = ({ children, popupClose, title }) => (
    <div className="overlay">
        <div className="popup-content">
            <h3>{title}</h3>
            {children}
            <span className="close-popup" onClick={popupClose}>X</span>
        </div>
    </div>
)

export { Popup }