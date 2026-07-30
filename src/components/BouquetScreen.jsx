import React from 'react';
import { motion } from 'framer-motion';

export default function BouquetScreen({ onBack }) {
  const notes = [
    { text: "You make me smile", position: { top: '15%', left: '8%' } },
    { text: "They remind me of how gentle you are", position: { top: '12%', right: '8%' } },
    { text: "Every time I see flowers, I think of you", position: { top: '35%', left: '4%' } },
    { text: "I wish I could give these to you in person", position: { top: '38%', right: '4%' } },
    { text: "Soft, kind, and beautiful just like this bouquet", position: { top: '60%', left: '6%' } },
    { text: "I hope this made you smile.", position: { top: '62%', right: '6%' } },
    { text: "Just for you", position: { top: '80%', left: '15%' } },
    { text: "I know roses are your favorite", position: { top: '80%', right: '15%' } }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem',
        position: 'relative',
        minHeight: '750px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '2.4rem',
        fontWeight: '700',
        color: '#D94555',
        letterSpacing: '2px',
        marginBottom: '0.2rem',
        textTransform: 'uppercase'
      }}>
        THIS IS FOR YOU
      </h1>

      <div style={{
        background: '#FFFFFF',
        border: '1.5px solid #E8E2D5',
        borderRadius: '12px',
        padding: '0.4rem 1.2rem',
        display: 'inline-block',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#7A6C6C', display: 'block' }}>
          Your favorite flowers
        </span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: '700', color: '#D94555', letterSpacing: '2px' }}>
          ROSES
        </span>
      </div>

      {/* Centerpiece Bouquet Illustration */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Rose Bouquet SVG Artwork */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          style={{ position: 'relative', zIndex: 5 }}
        >
          <svg width="280" height="340" viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wrapper / Craft Paper */}
            <path d="M70 180L140 320L210 180C210 180 170 195 140 195C110 195 70 180 70 180Z" fill="#E6D3C1" stroke="#3E3232" strokeWidth="2.5"/>
            <path d="M70 180L140 320L100 170Z" fill="#D5BFAC"/>
            <path d="M210 180L140 320L180 170Z" fill="#D5BFAC"/>

            {/* Ribbon */}
            <path d="M115 230C130 238 150 238 165 230" stroke="#D94555" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="140" cy="234" r="7" fill="#D94555"/>
            <path d="M140 234L125 260" stroke="#D94555" strokeWidth="4" strokeLinecap="round"/>
            <path d="M140 234L155 260" stroke="#D94555" strokeWidth="4" strokeLinecap="round"/>

            {/* Stems & Leaves */}
            <path d="M100 140Q120 160 140 200" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M180 140Q160 160 140 200" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M140 120L140 200" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round"/>

            {/* Green Leaf sprigs */}
            <path d="M85 130C70 120 75 100 95 110C105 120 95 135 85 130Z" fill="#5C8A67"/>
            <path d="M195 130C210 120 205 100 185 110C175 120 185 135 195 130Z" fill="#5C8A67"/>
            <path d="M140 80C125 65 145 50 155 70C155 80 145 90 140 80Z" fill="#5C8A67"/>

            {/* Red Roses Blooms */}
            {/* Rose 1 Top Center */}
            <circle cx="140" cy="90" r="28" fill="#D94555"/>
            <circle cx="140" cy="90" r="22" fill="#C53545"/>
            <path d="M130 85Q140 75 150 85Q140 100 130 85Z" fill="#9E2A37"/>
            <circle cx="140" cy="88" r="8" fill="#E55364"/>

            {/* Rose 2 Left */}
            <circle cx="95" cy="115" r="26" fill="#D94555"/>
            <circle cx="95" cy="115" r="20" fill="#C53545"/>
            <path d="M86 110Q95 100 104 110Q95 125 86 110Z" fill="#9E2A37"/>
            <circle cx="95" cy="113" r="7" fill="#E55364"/>

            {/* Rose 3 Right */}
            <circle cx="185" cy="115" r="26" fill="#D94555"/>
            <circle cx="185" cy="115" r="20" fill="#C53545"/>
            <path d="M176 110Q185 100 194 110Q185 125 176 110Z" fill="#9E2A37"/>
            <circle cx="185" cy="113" r="7" fill="#E55364"/>

            {/* Rose 4 Mid Center */}
            <circle cx="140" cy="135" r="30" fill="#E54658"/>
            <circle cx="140" cy="135" r="23" fill="#D94555"/>
            <path d="M128 130Q140 118 152 130Q140 148 128 130Z" fill="#B22B3B"/>
            <circle cx="140" cy="133" r="8" fill="#FF7586"/>

            {/* Rose 5 Bottom Left */}
            <circle cx="110" cy="160" r="24" fill="#D94555"/>
            <circle cx="110" cy="160" r="18" fill="#C53545"/>

            {/* Rose 6 Bottom Right */}
            <circle cx="170" cy="160" r="24" fill="#D94555"/>
            <circle cx="170" cy="160" r="18" fill="#C53545"/>

            {/* Small sparkles */}
            <circle cx="65" cy="90" r="3" fill="#FFD700"/>
            <circle cx="215" cy="90" r="3" fill="#FFD700"/>
            <circle cx="140" cy="40" r="4" fill="#FFD700"/>
          </svg>
        </motion.div>

        {/* Floating Note Badges */}
        {notes.map((note, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.08, zIndex: 20 }}
            className="floating-badge"
            style={{
              position: 'absolute',
              ...note.position,
              background: '#FFFFFF',
              border: '1.5px solid #E8E2D5',
              borderRadius: '12px',
              padding: '0.6rem 1.1rem',
              boxShadow: '0 6px 16px rgba(62, 50, 50, 0.08)',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-handwriting)',
              color: '#3E3232',
              maxWidth: '180px',
              zIndex: 10,
              cursor: 'pointer'
            }}
          >
            {note.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
