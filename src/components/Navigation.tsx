import React, { useState, useEffect } from 'react';
import type { Section, NavigationItem } from '../types';
import './Navigation.css';

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSectionChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const navigationItems: NavigationItem[] = sections.map((section) => ({
    id: section.id,
    number: section.order.toString().padStart(2, '0'),
    type: 'main',
    level: 1
  }));

  // The arc should be the full height of the screen, positioned at the left edge
  // Quarter circle that spans the full viewport height
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const radius = viewportHeight; // Make radius equal to viewport height for full screen arc

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <div className="navigation-container">
        {/* Draw the quarter circle line - full height, positioned at left edge */}
        <svg 
          className="bezel-arc" 
          width={radius} 
          height={viewportHeight} 
          viewBox={`0 0 ${radius} ${viewportHeight}`}
          style={{ 
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100vh',
            width: `${radius}px`,
            transform: 'rotate(-90deg)',
            transformOrigin: '0 0'
          }}
        >
          <path
            d={`M 0 ${viewportHeight} A ${radius} ${radius} 0 0 1 ${radius} 0`}
            stroke="var(--color-border)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        
        {/* Position navigation items along the arc */}
        {navigationItems.map((item, index) => {
          const isActive = activeSection === item.id;
          
          // Calculate angle along the quarter circle (from top to bottom along left edge)
          // The arc now goes from top (0,0) to bottom (0, viewportHeight)
          const totalItems = navigationItems.length;
          const angle = (index * 90) / (totalItems - 1); // 0° to 90°
          const angleRad = (angle * Math.PI) / 180;
          
          // Calculate position on the rotated arc
          // After rotation, the arc curves from top-left towards the right
          const arcX = radius * Math.sin(angleRad); // Distance from left edge
          const arcY = radius * (1 - Math.cos(angleRad)); // Distance from top
          
          return (
            <button
              key={item.id}
              className={`navigation-item ${isActive ? 'active' : ''}`}
              style={{
                position: 'fixed',
                left: `${arcX}px`,
                top: `${arcY}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: 101
              }}
              onClick={() => onSectionChange(item.id)}
              aria-label={`Navigate to section ${item.number}`}
            >
              <div className="navigation-dot"></div>
              <span className="navigation-number">{item.number}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation; 