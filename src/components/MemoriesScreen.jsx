import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

export default function MemoriesScreen({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // All 13 converted high quality user photos
  const photos = [
    { src: '/photos/IMG_7956.jpg', caption: 'Sweetest moments ❤️', rotation: -3 },
    { src: '/photos/IMG_8606.jpg', caption: 'Adventures together 💫', rotation: 2 },
    { src: '/photos/IMG_4901.jpg', caption: 'Precious times ✨', rotation: -2 },
    { src: '/photos/IMG_9739.jpg', caption: 'Always my favorite', rotation: 4 },
    { src: '/photos/IMG_9756.jpg', caption: 'Your beautiful smile ✨', rotation: -4 },
    { src: '/photos/404c595b-a508-424f-835a-4c5a42b5f0b8.jpg', caption: 'Little smiles 🌸', rotation: 3 },
    { src: '/photos/FullSizeRender.jpg', caption: 'My whole heart', rotation: -2 },
    { src: '/photos/IMG_5508.jpg', caption: 'Pure happiness 💕', rotation: 1 },
    { src: '/photos/IMG_6549.jpg', caption: 'Magic in the air', rotation: -3 },
    { src: '/photos/IMG_6988.jpg', caption: 'Side by side 💖', rotation: 3 },
    { src: '/photos/IMG_7724.jpg', caption: 'Unforgettable days 🌸', rotation: -1 },
    { src: '/photos/fqs 2026-07-15 210422B7097164B0C7.jpg', caption: 'Holding onto memories', rotation: 2 },
    { src: '/photos/fqs 2026-07-15 213009E636665AA9F7.jpg', caption: 'Forever & Always', rotation: -2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem 1rem 5rem 1rem'
      }}
    >
      <h1 style={{
        fontFamily: 'var(--font-romantic)',
        fontSize: '3.2rem',
        color: '#D94555',
        marginBottom: '0.2rem'
      }}>
        Captured memories
      </h1>

      <p style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.5rem',
        color: '#7A6C6C',
        marginBottom: '2.5rem'
      }}>
        Every photo holds a piece of our story ❤️
      </p>

      {/* Photobooth Strip Feature (as seen in reference video!) */}
      <div style={{
        background: '#FFFFFF',
        padding: '1.2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
        border: '2px dashed #E8E2D5',
        marginBottom: '3rem',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        maxWidth: '240px'
      }}>
        <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-sans)', fontWeight: '600', color: '#D94555', letterSpacing: '1px' }}>
          PHOTO STRIP
        </div>
        {photos.slice(0, 3).map((p, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImage(p.src)}
            style={{ width: '190px', height: '140px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #EEE' }}
          >
            <img src={p.src} alt="memory strip" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
        <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: '#3E3232' }}>
          Us ❤️
        </div>
      </div>

      {/* Polaroid Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2.5rem 1.8rem',
        width: '100%'
      }}>
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="polaroid-frame"
            onClick={() => setSelectedImage(photo.src)}
            style={{
              transform: `rotate(${photo.rotation}deg)`,
              cursor: 'pointer'
            }}
          >
            {/* Tape effect */}
            <div className="polaroid-tape" />

            <div style={{
              width: '100%',
              height: '210px',
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#F0ECE1',
              marginBottom: '0.8rem'
            }}>
              <img
                src={photo.src}
                alt={photo.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <p style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.25rem',
              color: '#3E3232',
              margin: 0
            }}>
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(30, 20, 20, 0.85)',
              backdropFilter: 'blur(6px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'white',
                padding: '16px 16px 50px 16px',
                borderRadius: '8px',
                maxWidth: '560px',
                width: '100%',
                maxHeight: '90vh',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                textAlign: 'center'
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#F6F3EB',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={20} color="#3E3232" />
              </button>

              <div style={{ width: '100%', height: '420px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src={selectedImage} alt="Enlarged photo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'var(--font-handwriting)', fontSize: '1.6rem', color: '#D94555' }}>
                <Heart size={20} fill="#D94555" />
                <span>You & Me</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
