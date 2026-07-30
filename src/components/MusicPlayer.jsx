import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Royalty-free romantic piano soundtrack
  const songUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-114476.mp3";

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
      <audio ref={audioRef} src={songUrl} loop preload="auto" />
      <button 
        onClick={togglePlay}
        className={`music-toggle ${isPlaying ? 'playing' : ''}`}
        title={isPlaying ? "Pause music" : "Play our romantic song"}
      >
        <Music size={16} className={isPlaying ? 'animate-spin' : ''} />
        <span>{isPlaying ? 'Playing Our Song 🎵' : 'Play Our Song'}</span>
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
}
