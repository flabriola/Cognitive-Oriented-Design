import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ContentSection from './components/ContentSection';
import DownloadButton from './components/DownloadButton';
import { SECTIONS } from './data/content';
import { getAssetPath } from './utils/paths';
import './styles/globals.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const sectionIndex = SECTIONS.findIndex(s => s.id === sectionId);
    if (sectionIndex !== -1) {
      setCurrentSectionIndex(sectionIndex);
    }
  };

  const goToNextSection = () => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      const nextSection = SECTIONS[nextIndex];
      setActiveSection(nextSection.id);
      setCurrentSectionIndex(nextIndex);
    }
  };

  const goToPreviousSection = () => {
    if (currentSectionIndex > 0) {
      const prevIndex = currentSectionIndex - 1;
      const prevSection = SECTIONS[prevIndex];
      setActiveSection(prevSection.id);
      setCurrentSectionIndex(prevIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goToNextSection();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSection();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSectionIndex]);


  return (
    <div className="app">
      <div className="navigation-container">
        <Navigation
          sections={SECTIONS}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        
      </div>

      <main className="main-content">
        {/* Download button for academic paper */}
        <div className="download-section">
          <DownloadButton />
        </div>

        <ContentSection
          section={SECTIONS[currentSectionIndex]}
          isActive={true}
        />

        {/* Navigation buttons */}
        <div className="section-navigation">
          <button
            className="nav-button prev-button"
            onClick={goToPreviousSection}
            disabled={currentSectionIndex === 0}
          >
            ← Previous
          </button>

          <span className="section-counter">
            {currentSectionIndex + 1} / {SECTIONS.length}
          </span>

          <button
            className="nav-button next-button"
            onClick={goToNextSection}
            disabled={currentSectionIndex === SECTIONS.length - 1}
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
