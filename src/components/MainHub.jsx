import React from 'react';
import { motion } from 'framer-motion';
import { Image, Mail, Lock, Flower2 } from 'lucide-react';

export default function MainHub({ onSelectCategory, isUnlocked }) {
  const cards = [
    {
      id: 'memories',
      title: 'Captured memories',
      icon: Image,
      color: '#D94555',
      bg: '#FFF5F6',
      badge: 'Photos'
    },
    {
      id: 'letter',
      title: 'Love Letter',
      icon: Mail,
      color: '#C83E4D',
      bg: '#FFF8F0',
      badge: 'Message'
    },
    {
      id: 'lock',
      title: isUnlocked ? 'Our Future Plans' : 'One last surprise...',
      icon: Lock,
      color: isUnlocked ? '#388E3C' : '#E65100',
      bg: isUnlocked ? '#F1F8E9' : '#FFF3E0',
      badge: isUnlocked ? 'Unlocked ✨' : 'Special Lock'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '720px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem'
      }}
    >
      <h1 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '2.4rem',
        fontWeight: '700',
        color: '#D94555',
        letterSpacing: '2px',
        marginBottom: '0.4rem',
        textTransform: 'uppercase'
      }}>
        THESE ARE FOR YOU!
      </h1>

      <p style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.8rem',
        color: '#6A5A5A',
        marginBottom: '2.5rem'
      }}>
        I hope you like them, I love you!
      </p>

      {/* 2x2 Interactive Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        width: '100%'
      }}>
        {cards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectCategory(card.id)}
              style={{
                background: '#FFFFFF',
                border: '2px solid #E8E2D5',
                borderRadius: '20px',
                padding: '2.2rem 1.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(62, 50, 50, 0.06)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                background: card.bg,
                padding: '1.2rem',
                borderRadius: '16px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComp size={38} color={card.color} strokeWidth={1.8} />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.15rem',
                fontWeight: '600',
                color: '#3E3232',
                marginBottom: '0.2rem'
              }}>
                {card.title}
              </h3>

              {card.subtitle && (
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: card.color,
                  letterSpacing: '1px'
                }}>
                  {card.subtitle}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
