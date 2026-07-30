import React from 'react';
import { motion } from 'framer-motion';

export default function LoveLetterScreen({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Parchment Letter Container with Floral Accents */}
      <div style={{
        background: '#FFFDF9',
        border: '2px solid #E8DECC',
        borderRadius: '24px',
        padding: '3.5rem 3rem 4rem 3rem',
        boxShadow: '0 15px 40px rgba(62, 50, 50, 0.08), 0 4px 12px rgba(217, 69, 85, 0.05)',
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        backgroundImage: 'radial-gradient(#F5EBDC 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
        {/* Top Floral Header Accent */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🌸</span>
          <span style={{ fontSize: '1.8rem' }}>🌹</span>
          <span style={{ fontSize: '1.5rem' }}>🌸</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#D94555',
          letterSpacing: '2px',
          marginBottom: '2rem',
          textTransform: 'uppercase'
        }}>
          GOOD MORNING, MY LOVE!
        </h1>

        {/* Romantic Letter Content */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          lineHeight: '2.1',
          color: '#4A3B3B',
          fontStyle: 'italic',
          marginBottom: '2.5rem',
          maxWidth: '520px',
          margin: '0 auto 2.5rem auto'
        }}>
          <p style={{ marginBottom: '1.2rem' }}>
            I feel so lucky to wake up and walk through life with you by my side.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Even the smallest moments feel special with you. You make ordinary days feel meaningful.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            I hope today brings you peace, joy, and a beautiful morning filled with love.
          </p>
          <p>
            You deserve so much more than you realize.
          </p>
        </div>

        {/* Signature */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginRight: '2rem'
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: '#7A6C6C',
            fontStyle: 'italic'
          }}>
            With all my love,
          </span>
          <span style={{
            fontFamily: 'var(--font-romantic)',
            fontSize: '2.6rem',
            color: '#D94555',
            lineHeight: 1
          }}>
            — Me ❤️
          </span>
        </div>

        {/* Bottom Floral Accent */}
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#FFFDF9',
          padding: '0 1rem',
          border: '1px solid #E8DECC',
          borderRadius: '20px',
          fontSize: '1.2rem'
        }}>
          ✨ 💐 ✨
        </div>
      </div>
    </motion.div>
  );
}
