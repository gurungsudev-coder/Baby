import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DateUnlockScreen({ onUnlockSuccess, isUnlocked }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleUnlock = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setErrorMsg('Please select a birthday date!');
      return;
    }

    // Trigger sweet confetti explosion
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D94555', '#FF85A1', '#D4AF37', '#81C784']
    });

    onUnlockSuccess();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Cat on Birthday Cake Illustration */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        style={{ marginBottom: '1.2rem' }}
      >
        <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cake Base */}
          <rect x="35" y="70" width="80" height="40" rx="8" fill="#FFF5F6" stroke="#3E3232" strokeWidth="3"/>
          <path d="M35 85C45 92 55 80 65 87C75 94 85 82 95 89C105 96 115 84 115 85" stroke="#D94555" strokeWidth="4" strokeLinecap="round"/>

          {/* Candle */}
          <rect x="71" y="48" width="8" height="22" rx="2" fill="#D94555"/>
          <path d="M75 38 C72 44, 78 44, 75 48 Z" fill="#FFD700"/>

          {/* Cute Cat on top of Cake */}
          <ellipse cx="75" cy="40" rx="22" ry="16" fill="#FFFFFF" stroke="#3E3232" strokeWidth="2.5"/>
          <path d="M60 32L52 18L66 26" stroke="#3E3232" strokeWidth="2.5"/>
          <path d="M90 32L98 18L84 26" stroke="#3E3232" strokeWidth="2.5"/>
          <circle cx="67" cy="38" r="2.5" fill="#3E3232"/>
          <circle cx="83" cy="38" r="2.5" fill="#3E3232"/>
          <path d="M73 42L75 44L77 42" stroke="#D94555" strokeWidth="2"/>
        </svg>
      </motion.div>

      <h1 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '2.2rem',
        fontWeight: '700',
        color: '#3E3232',
        marginBottom: '0.3rem'
      }}>
        One last surprise...
      </h1>

      <p style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.6rem',
        color: '#D94555',
        marginBottom: '2rem'
      }}>
        Only today can unlock it 🌅 ✨
      </p>

      {/* Date Form Card */}
      <form onSubmit={handleUnlock} style={{
        background: '#FFFFFF',
        border: '2px solid #E8E2D5',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 24px rgba(62, 50, 50, 0.06)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '300px'
        }}>
          <Calendar size={20} color="#7A6C6C" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setErrorMsg('');
            }}
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 3rem',
              border: '2px solid #E8E2D5',
              borderRadius: '14px',
              fontSize: '1rem',
              fontFamily: 'var(--font-sans)',
              color: '#3E3232',
              outline: 'none',
              background: '#FBF9F4'
            }}
          />
        </div>

        {errorMsg && (
          <span style={{ color: '#D94555', fontSize: '0.9rem', fontWeight: '500' }}>
            {errorMsg}
          </span>
        )}

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          style={{
            background: '#D94555',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '0.9rem 2.5rem',
            fontSize: '1.05rem',
            fontWeight: '600',
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(217, 69, 85, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textTransform: 'uppercase'
          }}
        >
          <span>UNLOCK</span>
          <Unlock size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
}
