// Popup.js
import React from "react";
import "./popup.css";

const Popup = ({ isOpen, onClose, children, headingpop }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="close-btn" onClick={onClose}>
          <p style={{ paddingBottom: "0", textAlign: "end" }}>+</p>
        </div>
        <p>{headingpop}</p>
        {children}
      </div>
    </div>
  );
};

export default Popup;
