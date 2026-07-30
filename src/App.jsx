import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Home } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import LandingScreen from './components/LandingScreen';
import MainHub from './components/MainHub';
import BouquetScreen from './components/BouquetScreen';
import MemoriesScreen from './components/MemoriesScreen';
import LoveLetterScreen from './components/LoveLetterScreen';
import DateUnlockScreen from './components/DateUnlockScreen';
import FuturePlansScreen from './components/FuturePlansScreen';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSelectCategory = (catId) => {
    if (catId === 'lock') {
      if (isUnlocked) {
        setCurrentView('future');
      } else {
        setCurrentView('lock');
      }
    } else {
      setCurrentView(catId);
    }
  };

  const handleUnlockSuccess = () => {
    setIsUnlocked(true);
    setCurrentView('future');
  };

  return (
    <div className="app-container">
      {/* Floating Romantic Song Audio Toggle */}
      <MusicPlayer />

      {/* Floating Home Button (Visible in subviews) */}
      {currentView !== 'landing' && (
        <button 
          onClick={() => setCurrentView('hub')}
          className="nav-home-btn"
          title="Back to main hub"
        >
          <Home size={24} />
        </button>
      )}

      {/* Screen View Transitions */}
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <LandingScreen key="landing" onStart={() => setCurrentView('hub')} />
        )}

        {currentView === 'hub' && (
          <MainHub 
            key="hub" 
            onSelectCategory={handleSelectCategory}
            isUnlocked={isUnlocked}
          />
        )}

        {currentView === 'bouquet' && (
          <BouquetScreen key="bouquet" onBack={() => setCurrentView('hub')} />
        )}

        {currentView === 'memories' && (
          <MemoriesScreen key="memories" onBack={() => setCurrentView('hub')} />
        )}

        {currentView === 'letter' && (
          <LoveLetterScreen key="letter" onBack={() => setCurrentView('hub')} />
        )}

        {currentView === 'lock' && (
          <DateUnlockScreen 
            key="lock" 
            onUnlockSuccess={handleUnlockSuccess}
            isUnlocked={isUnlocked}
          />
        )}

        {currentView === 'future' && (
          <FuturePlansScreen key="future" onBack={() => setCurrentView('hub')} />
        )}
      </AnimatePresence>
    </div>
  );
}
