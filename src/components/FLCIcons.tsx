import React from 'react';
import { FLC_CLASSIFICATIONS } from '../data/content';
import './FLCIcons.css';

const FLCIcons: React.FC = () => {
  return (
    <div className="flc-icons">
      <div className="container">
        <div className="icons-grid">
          {FLC_CLASSIFICATIONS.map((classification, index) => (
            <div 
              key={classification.code} 
              className="classification-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container">
                <img 
                  src={classification.icon} 
                  alt={`${classification.code} icon`} 
                  className="classification-icon"
                />
              </div>
              <div className="classification-content">
                <h4 className="classification-code">{classification.code}</h4>
                <h5 className="classification-label">{classification.label}</h5>
                <p className="classification-definition">
                  {classification.definition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FLCIcons; 