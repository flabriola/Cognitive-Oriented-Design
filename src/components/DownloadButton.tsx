import React from 'react';
import './DownloadButton.css';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/academic_paper.pdf';
    link.download = 'Cognition-Oriented_Design_Academic_Paper.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className="download-button" 
      onClick={handleDownload}
      title="Download Academic Paper (PDF)"
      disabled={true}
    >
      <svg 
        className="download-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download
    </button>
  );
};

export default DownloadButton; 