import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../components/AppButton';

const ROUTES = {
  STUDY: '/study',
  QUIZ: '/quiz',
  STATS: '/stats',
};

const LABELS = {
  STUDY: 'Study Flashcards',
  QUIZ: 'Quiz Mode',
  STATS: 'Statistics Page',
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
        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: '#222' }}>PMP Flashcards</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#555' }}>Welcome, choose an activity to start</p>
        <AppButton
          label={LABELS.STUDY}
          color="primary"
          onClick={() => navigate(ROUTES.STUDY)}
          ariaLabel="Start studying flashcards"
        />
        <AppButton
          label={LABELS.QUIZ}
          color="success"
          onClick={() => navigate(ROUTES.QUIZ)}
          ariaLabel="Start quiz mode"
        />
        <AppButton
          label={LABELS.STATS}
          color="secondary"
          onClick={() => navigate(ROUTES.STATS)}
          ariaLabel="View statistics page"
        />
      </div>
    </div>
  );
};

export default Home; 