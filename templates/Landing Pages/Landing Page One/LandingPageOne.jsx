import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <div className="toggle-container">
      <div className="toggle-group">
        <button 
          className={`toggle-button ${showCustomTheme ? 'selected' : ''}`}
          onClick={() => toggleCustomTheme(true)}
        >
          <AutoAwesomeRoundedIcon style={{ fontSize: '20px', marginRight: '8px' }} />
          Custom theme
        </button>
        <button 
          className={`toggle-button ${!showCustomTheme ? 'selected' : ''}`}
          onClick={() => toggleCustomTheme(false)}
        >
          Material Design 2
        </button>
      </div>
    </div>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = useState('light');
  const [showCustomTheme, setShowCustomTheme] = useState(true);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <div className={showCustomTheme ? `theme-custom-${mode}` : `theme-default-${mode}`}>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <div className="background">
        <LogoCollection />
        <Features />
        <hr />
        <Testimonials />
        <hr />
        <Highlights />
        <hr />
        <Pricing />
        <hr />
        <FAQ />
        <hr />
        <Footer />
      </div>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </div>
  );
}
