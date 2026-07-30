import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Clock, Sparkles } from 'lucide-react';

export default function SpecialDateScreen({ onBack }) {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date('2023-12-29T00:00:00');
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      const totalDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));

      setTimeTogether({ years, months, days, hours, minutes, seconds, totalDays });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Top Special Date Badge */}
      <div style={{
        background: '#FFF0F2',
        border: '1.5px solid #F5C6CB',
        borderRadius: '20px',
        padding: '0.5rem 1.6rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        marginBottom: '1rem'
      }}>
        <Sparkles size={18} color="#D94555" />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: '700', color: '#D94555', letterSpacing: '1px' }}>
          OUR SPECIAL MEMORABLE DAY
        </span>
        <Sparkles size={18} color="#D94555" />
      </div>

      <h1 style={{
        fontFamily: 'var(--font-romantic)',
        fontSize: '3.6rem',
        color: '#D94555',
        marginBottom: '0.2rem'
      }}>
        Our Memorable Day
      </h1>

      <p style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.8rem',
        color: '#6A5A5A',
        marginBottom: '2rem'
      }}>
        The day our hearts connected ❤️
      </p>

      {/* Romantic Description Card */}
      <div style={{
        background: '#FFFFFF',
        border: '2px solid #E8E2D5',
        borderRadius: '24px',
        padding: '2.2rem 2rem',
        boxShadow: '0 10px 30px rgba(62, 50, 50, 0.06)',
        width: '100%',
        marginBottom: '2rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          lineHeight: '1.9',
          color: '#4A3B3B',
          fontStyle: 'italic',
          maxWidth: '620px',
          margin: '0 auto'
        }}>
          "The day our lives intertwined and a beautiful journey began.
          From that unforgettable day to this very moment, every second spent with you has been full of warmth, love, and happiness."
        </p>
      </div>

      {/* Live Time Together Counter Grid */}
      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '1.3rem',
        fontWeight: '700',
        color: '#3E3232',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Clock size={22} color="#D94555" />
        <span>Time We Got Attached Till Today</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
        gap: '1.2rem',
        width: '100%',
        marginBottom: '2rem'
      }}>
        {/* Years */}
        <div style={{ background: '#FFFFFF', border: '2px solid #E8E2D5', borderRadius: '16px', padding: '1.2rem 0.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#D94555', fontFamily: 'var(--font-sans)', display: 'block' }}>
            {timeTogether.years}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#7A6C6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Years
          </span>
        </div>

        {/* Months */}
        <div style={{ background: '#FFFFFF', border: '2px solid #E8E2D5', borderRadius: '16px', padding: '1.2rem 0.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#D94555', fontFamily: 'var(--font-sans)', display: 'block' }}>
            {timeTogether.months}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#7A6C6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Months
          </span>
        </div>

        {/* Days */}
        <div style={{ background: '#FFFFFF', border: '2px solid #E8E2D5', borderRadius: '16px', padding: '1.2rem 0.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#D94555', fontFamily: 'var(--font-sans)', display: 'block' }}>
            {timeTogether.days}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#7A6C6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Days
          </span>
        </div>

        {/* Hours */}
        <div style={{ background: '#FFFFFF', border: '2px solid #E8E2D5', borderRadius: '16px', padding: '1.2rem 0.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#3E3232', fontFamily: 'var(--font-sans)', display: 'block' }}>
            {String(timeTogether.hours).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#7A6C6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div style={{ background: '#FFFFFF', border: '2px solid #E8E2D5', borderRadius: '16px', padding: '1.2rem 0.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#3E3232', fontFamily: 'var(--font-sans)', display: 'block' }}>
            {String(timeTogether.minutes).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#7A6C6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Mins
          </span>
        </div>

        {/* Seconds */}
        <div style={{ background: '#FFFFFF', border: '2px solid #E8E2D5', borderRadius: '16px', padding: '1.2rem 0.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#D94555', fontFamily: 'var(--font-sans)', display: 'block' }}>
            {String(timeTogether.seconds).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#7A6C6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Secs
          </span>
        </div>
      </div>

      {/* Summary Footer */}
      <div style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.6rem',
        color: '#D94555',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Heart size={22} fill="#D94555" />
        <span>Attached & in love for {timeTogether.totalDays} days and counting...</span>
        <Heart size={22} fill="#D94555" />
      </div>
    </motion.div>
  );
}
