import React from 'react';
import type { Section } from '../types';
import ELCIcons from './ELCIcons';
import FLCIcons from './FLCIcons';
import './ContentSection.css';

interface ContentSectionProps {
  section: Section;
  isActive: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section, isActive }) => {
  if (!isActive) return null;

  // Special handling for hero section
  if (section.id === 'hero') {
    return (
      <section className="content-section hero-section active">
        <div className="container">
          <div className="hero-content">
            <blockquote className="hero-quote fade-in">
              "{section.description}"
            </blockquote>
            <p className="hero-subtitle slide-in-right">
              {section.content}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={section.id} className={`content-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{section.title}</h2>
          {section.description && (
            <p className="section-description">
              {section.description.split('\n').map((line, idx, arr) =>
                idx < arr.length - 1 ? (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ) : (
                  line
                )
              )}
            </p>
          )}
        </div>

        {section.content && section.content !== 'icons:elc' && section.content !== 'icons:flc' && (
          <div className="section-content slide-in-right">
            {renderContent(section.content)}
          </div>
        )}

        {/* Special handling for ELC icons */}
        {section.content === 'icons:elc' && (
          <div className="icons-section">
            <ELCIcons />
          </div>
        )}

        {/* Special handling for FLC icons */}
        {section.content === 'icons:flc' && (
          <div className="icons-section">
            <FLCIcons />
          </div>
        )}

        {/* Special handling for EDE Process Flow section to show diagram */}
        {section.id === 'ede-process' && (
          <div className="diagram-section">
            <div className="diagram-container">
              <img src="/EDE-Diagram.svg" alt="EDE Diagram" className="ede-diagram" />
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

const renderContent = (content: string) => {
  // Check if content contains table markers
  if (content.includes('|')) {
    return renderTable(content);
  }
  
  // Check if content contains list markers (–, -, or •)
  if (content.includes('–') || content.includes('- **') || content.includes('•')) {
    return renderList(content);
  }
  
  // Regular text content
  return content.split('\n\n').map((paragraph, index) => {
    if (paragraph.trim()) {
      // Check if it's a heading (starts with a word, no punctuation)
      if (/^[A-Z][a-z]+$/.test(paragraph.trim())) {
        return <h3 key={index} className="content-heading">{paragraph}</h3>;
      }
      // Handle paragraphs with bold text and quotes
      const formattedText = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/> (.*?)(?=\n|$)/g, '<blockquote>$1</blockquote>');
      return <p key={index} className="content-paragraph" dangerouslySetInnerHTML={{ __html: formattedText }} />;
    }
    return null;
  });
};

const renderTable = (content: string) => {
  const lines = content.split('\n');
  const headers = lines[0].split('|').map(h => h.trim()).filter(h => h);
  const rows = lines.slice(2).map(line => 
    line.split('|').map(cell => cell.trim()).filter(cell => cell)
  );

  return (
    <div className="table-container">
      <table className="content-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const renderList = (content: string) => {
  const items = content.split('\n').filter(item => item.trim() && (item.includes('–') || item.includes('- **') || item.includes('•')));
  
  return (
    <ul className="content-list">
      {items.map((item, index) => (
        <li key={index} className="list-item" dangerouslySetInnerHTML={{
          __html: item.replace(/^[A-Z0-9]*\s*[–•]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        }} />
      ))}
    </ul>
  );
};

export default ContentSection; 