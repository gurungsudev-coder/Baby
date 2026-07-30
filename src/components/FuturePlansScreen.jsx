import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function FuturePlansScreen({ onBack }) {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const plans = [
    {
      id: 'hug',
      title: 'The First Hug',
      details: 'No more screens. Just you and me.',
      tag: 'One day...'
    },
    {
      id: 'house',
      title: 'Our Little House',
      details: 'Simple mornings. Late-night talks.',
      tag: "You'll see..."
    },
    {
      id: 'together',
      title: 'Side by Side',
      details: 'New places. Same love.',
      tag: 'Trust me...'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '840px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Floral / Heart Top Banner */}
      <div style={{
        background: '#FFF5F6',
        border: '1.5px solid #F5C6CB',
        borderRadius: '16px',
        padding: '0.5rem 1.8rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        marginBottom: '1rem'
      }}>
        <Sparkles size={18} color="#D94555" />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: '600', color: '#D94555', letterSpacing: '1px' }}>
          SECRET UNLOCKED!
        </span>
        <Sparkles size={18} color="#D94555" />
      </div>

      <h1 style={{
        fontFamily: 'var(--font-romantic)',
        fontSize: '3.4rem',
        color: '#D94555',
        marginBottom: '0.2rem'
      }}>
        Our Future Plans
      </h1>

      <p style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.7rem',
        color: '#7A6C6C',
        marginBottom: '2.5rem'
      }}>
        Tap to see what's waiting ❤️
      </p>

      {/* 3 Future Plan Interactive Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '1.8rem',
        width: '100%'
      }}>
        {plans.map((plan, idx) => {
          const isCardFlipped = flipped[plan.id];
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleFlip(plan.id)}
              style={{
                background: '#FFFFFF',
                border: '2px solid #E8E2D5',
                borderRadius: '20px',
                padding: '2.2rem 1.5rem',
                cursor: 'pointer',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px rgba(62, 50, 50, 0.07)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Red Heart Header Icon */}
              <div style={{
                background: '#D94555',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                boxShadow: '0 6px 16px rgba(217, 69, 85, 0.3)'
              }}>
                <Heart size={24} fill="#FFFFFF" color="#FFFFFF" />
              </div>

              {!isCardFlipped ? (
                <>
                  <span style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '1.4rem',
                    color: '#7A6C6C',
                    marginBottom: '0.4rem'
                  }}>
                    {plan.tag}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#3E3232'
                  }}>
                    {plan.title}
                  </h3>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center' }}
                >
                  <h4 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#D94555',
                    marginBottom: '0.6rem'
                  }}>
                    {plan.title}
                  </h4>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    color: '#4A3B3B',
                    fontStyle: 'italic',
                    lineHeight: '1.5'
                  }}>
                    "{plan.details}"
                  </p>
                </motion.div>
              )}

              <span style={{
                position: 'absolute',
                bottom: '12px',
                fontSize: '0.75rem',
                color: '#BBB',
                fontFamily: 'var(--font-sans)'
              }}>
                {isCardFlipped ? 'Tap to close' : 'Tap to reveal'}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
