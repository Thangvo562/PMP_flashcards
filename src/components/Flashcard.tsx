import React, { useState } from 'react';
import type { Flashcard as FlashcardType } from '../data/flashcards';

interface FlashcardProps {
  card: FlashcardType;
}

const cardStyle: React.CSSProperties = {
  width: '350px',
  height: '220px',
  perspective: '1000px',
  margin: '2rem auto',
  cursor: 'pointer',
};

const innerStyle = (flipped: boolean): React.CSSProperties => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s cubic-bezier(0.4,0.2,0.2,1)',
  transformStyle: 'preserve-3d',
  transform: flipped ? 'rotateY(180deg)' : 'none',
});

const sideStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem',
};

const frontStyle: React.CSSProperties = {
  ...sideStyle,
  fontSize: '2rem',
  fontWeight: 600,
  color: '#2563eb',
};

const backStyle: React.CSSProperties = {
  ...sideStyle,
  transform: 'rotateY(180deg)',
  color: '#222',
  fontSize: '1.1rem',
  justifyContent: 'flex-start',
};

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={cardStyle} onClick={() => setFlipped(f => !f)}>
      <div style={innerStyle(flipped)}>
        <div style={frontStyle} data-testid="card-front">
          {card.term}
        </div>
        <div style={backStyle} data-testid="card-back">
          <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>{card.translation}</div>
          <div style={{ marginBottom: 6 }}><b>EN:</b> {card.exampleEn}</div>
          <div><b>VI:</b> {card.exampleVi}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 