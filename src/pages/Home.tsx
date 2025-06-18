import React from 'react';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '0.5rem 0',
  width: '220px',
  transition: 'background 0.2s',
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f5f6fa',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: '#222' }}>PMP Flashcards App</h1>
        <button
          style={{ ...buttonStyle, background: '#2563eb' }}
          onMouseOver={e => (e.currentTarget.style.background = '#1d4ed8')}
          onMouseOut={e => (e.currentTarget.style.background = '#2563eb')}
          onClick={() => navigate('/study')}
        >
          Study Flashcards
        </button>
        <button
          onClick={() => navigate('/quiz')}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '1rem',
            width: '100%',
            maxWidth: '300px',
            transition: 'transform 0.2s, background-color 0.2s'
          }}
        >
          Quiz Mode
        </button>
        <button
          style={{ ...buttonStyle, background: '#a21caf' }}
          onMouseOver={e => (e.currentTarget.style.background = '#701a75')}
          onMouseOut={e => (e.currentTarget.style.background = '#a21caf')}
          onClick={() => navigate('/stats')}
        >
          Statistics Page
        </button>
      </div>
    </div>
  );
};

export default Home; 