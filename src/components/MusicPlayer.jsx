import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Sajjan Raj Vaidya - Juni (Actual downloaded audio track)
  const songUrl = "/music/juni.webm";

  const startPlayback = () => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.log("Autoplay policy waiting for initial interaction:", err);
    });
  };

  useEffect(() => {
    // Attempt instant playback on website visit
    startPlayback();

    // Catch any user interaction (click, scroll, touch, mouse movement) to start audio instantly
    const handleUserInteraction = () => {
      startPlayback();
    };

    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('scroll', handleUserInteraction, { once: true });
    window.addEventListener('mousemove', handleUserInteraction, { once: true });
    window.addEventListener('pointerdown', handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  };

  return (
    <div style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 1000 }}>
      <audio ref={audioRef} src={songUrl} loop autoPlay preload="auto" />
      <button 
        onClick={togglePlay}
        className={`music-toggle ${isPlaying ? 'playing' : ''}`}
        title={isPlaying ? "Pause music" : "Play Sajjan Raj Vaidya - Juni"}
      >
        <Music size={16} className={isPlaying ? 'animate-spin' : ''} />
        <span>{isPlaying ? 'Sajjan Raj Vaidya - Juni 🎵' : 'Play Juni 🎵'}</span>
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
}
