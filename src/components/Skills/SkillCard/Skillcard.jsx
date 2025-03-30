import React from 'react';
import './Skillcard.css';

const Skillcard = ({ title, logourl, isActive, onClick }) => {
    return (
        <div
            className={`skills-card ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="skill-logo">
                <img src={logourl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    );
};

export default Skillcard;
