import React, { useState, useEffect } from 'react';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import { useNavigate } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'pmp_flashcards_progress';

type Progress = {
  wrongCards: string[];
  studied: Record<string, { right: number; wrong: number }>;
};

const loadProgress = (): Progress => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch {}
  return { wrongCards: [], studied: {} };
};

const saveProgress = (progress: Progress) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
};

const Study: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState<Progress>(loadProgress());
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const handleAnswer = (result: 'right' | 'wrong', cardId: string) => {
    setAnswered(true);
    setProgress(prev => {
      const studied = { ...prev.studied };
      if (!studied[cardId]) studied[cardId] = { right: 0, wrong: 0 };
      studied[cardId][result]++;
      let wrongCards = prev.wrongCards.filter(id => id !== cardId);
      if (result === 'wrong') wrongCards.push(cardId);
      return { studied, wrongCards };
    });
  };

  const handleNext = () => {
    setAnswered(false);
    setCurrent(c => (c + 1 < flashcards.length ? c + 1 : 0));
  };

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
        <Flashcard card={flashcards[current]} onAnswer={handleAnswer} />
        {answered && (
          <button
            style={{
              marginTop: '1.5rem',
              padding: '0.7rem 2rem',
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
            onClick={handleNext}
          >
            Next Card
          </button>
        )}
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
        <div style={{ marginTop: 16, color: '#888', fontSize: '0.95rem' }}>
          Wrong cards: {progress.wrongCards.length}
        </div>
      </div>
    </div>
  );
};

export default Study; 