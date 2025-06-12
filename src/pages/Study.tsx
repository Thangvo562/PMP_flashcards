import React from 'react';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import { useNavigate } from 'react-router-dom';

const Study: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f5f6fa',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1.5rem', textAlign: 'center' }}>Study Flashcards</h2>
        <Flashcard card={flashcards[0]} />
        <button
          style={{
            marginTop: '2rem',
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background 0.2s',
            display: 'block',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#1d4ed8')}
          onMouseOut={e => (e.currentTarget.style.background = '#2563eb')}
          onClick={() => navigate('/')}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Study; 