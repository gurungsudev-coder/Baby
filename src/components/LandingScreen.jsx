import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function LandingScreen({ onStart }) {
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    // Evasive logic: jump to random offset when hovered
    const randomX = (Math.random() - 0.5) * 260;
    const randomY = (Math.random() - 0.5) * 160;
    setNoBtnPos({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    // Trigger sweet heart/confetti explosion
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D94555', '#FF85A1', '#FFC2D1', '#D4AF37']
    });
    onStart();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '540px',
        width: '100%'
      }}
    >
      {/* Doodle Cute Cat SVG Illustration */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        style={{ marginBottom: '1.5rem' }}
      >
        <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cat ears */}
          <path d="M35 45L20 15L50 32" stroke="#3E3232" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M105 45L120 15L90 32" stroke="#3E3232" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Cat head */}
          <ellipse cx="70" cy="55" rx="45" ry="35" fill="#FFFFFF" stroke="#3E3232" strokeWidth="3.5"/>
          {/* Eyes */}
          <circle cx="53" cy="52" r="4" fill="#3E3232"/>
          <circle cx="87" cy="52" r="4" fill="#3E3232"/>
          {/* Blush */}
          <ellipse cx="44" cy="60" rx="6" ry="4" fill="#FFB7C5" opacity="0.8"/>
          <ellipse cx="96" cy="60" rx="6" ry="4" fill="#FFB7C5" opacity="0.8"/>
          {/* Nose and mouth */}
          <path d="M70 58L66 63H74L70 58Z" fill="#D94555"/>
          <path d="M70 63Q64 70 58 66" stroke="#3E3232" strokeWidth="3" strokeLinecap="round"/>
          <path d="M70 63Q76 70 82 66" stroke="#3E3232" strokeWidth="3" strokeLinecap="round"/>
          {/* Whiskers */}
          <path d="M22 52L36 54" stroke="#3E3232" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 62L36 60" stroke="#3E3232" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M118 52L104 54" stroke="#3E3232" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M120 62L104 60" stroke="#3E3232" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Heart on head */}
          <path d="M70 12 C67 6, 60 8, 60 14 C60 20, 70 26, 70 26 C70 26, 80 20, 80 14 C80 8, 73 6, 70 12 Z" fill="#D94555"/>
        </svg>
      </motion.div>

      {/* Greetings */}
      <h2 style={{ 
        fontFamily: 'var(--font-handwriting)', 
        fontSize: '3.2rem', 
        color: '#3E3232', 
        marginBottom: '0.2rem',
        lineHeight: 1
      }}>
        Hello
      </h2>
      <h1 style={{ 
        fontFamily: 'var(--font-romantic)', 
        fontSize: '3.8rem', 
        color: '#D94555', 
        marginBottom: '1rem',
        lineHeight: 1
      }}>
        my love!
      </h1>

      <p style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: '1.4rem', 
        color: '#5A4A4A', 
        marginBottom: '2.5rem',
        fontStyle: 'italic'
      }}>
        Do you want to see your morning surprise?
      </p>

      {/* Action Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        minHeight: '60px'
      }}>
        {/* YES PLEASE Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleYes}
          style={{
            background: '#D94555',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '0.9rem 2.2rem',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(217, 69, 85, 0.35)',
            textTransform: 'uppercase'
          }}
        >
          YES PLEASE ❤️
        </motion.button>

        {/* Evasive NO THANKS Button */}
        <motion.button
          animate={{ x: noBtnPos.x, y: noBtnPos.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{
            background: '#FFFFFF',
            color: '#7A6C6C',
            border: '2px solid #E8E2D5',
            borderRadius: '30px',
            padding: '0.9rem 2.2rem',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            textTransform: 'uppercase'
          }}
        >
          NO THANKS
        </motion.button>
      </div>
    </motion.div>
  );
}
