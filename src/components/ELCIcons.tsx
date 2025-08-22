import React from 'react';
import { ELC_CLASSIFICATIONS } from '../data/content';
import './ELCIcons.css';

const ELCIcons: React.FC = () => {
  return (
    <div className="elc-icons">
      <div className="container">
        <div className="icons-grid">
          {ELC_CLASSIFICATIONS.map((classification, index) => (
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
                <p className="classification-description">
                  {classification.description}
                </p>
                <div className="machine-involvement">
                  <span className="involvement-label">Machine Involvement:</span>
                  <span className="involvement-value">{classification.machineInvolvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ELCIcons; 