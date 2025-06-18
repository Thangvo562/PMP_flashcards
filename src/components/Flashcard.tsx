import React, { useState, useEffect, useCallback } from 'react';
import type { Flashcard as FlashcardType } from '../data/flashcards';

/**
 * FlashcardProps interface
 * @property card - The flashcard data to display
 * @property onAnswer - Callback when user marks right/wrong
 */
interface FlashcardProps {
  card: FlashcardType;
  onAnswer?: (result: 'right' | 'wrong', cardId: string) => void;
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

/**
 * Flashcard component
 * Handles flipping, keyboard shortcuts, and answer actions.
 */
const Flashcard: React.FC<FlashcardProps> = ({ card, onAnswer }) => {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState<null | 'right' | 'wrong'>(null);

  /**
   * Keyboard shortcuts for right/wrong after flip
   * ← (left arrow): Mark as Wrong
   * → (right arrow): Mark as Right
   */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!flipped || answered) return;
    if (e.key === 'ArrowLeft') { // Now Left means Wrong
      setAnswered('wrong');
      onAnswer && onAnswer('wrong', card.id);
    } else if (e.key === 'ArrowRight') { // Now Right means Right
      setAnswered('right');
      onAnswer && onAnswer('right', card.id);
    }
  }, [flipped, answered, onAnswer, card.id]);

  // Attach/detach keyboard event listener when needed
  useEffect(() => {
    if (flipped && !answered) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [flipped, answered, handleKeyDown]);

  // Flip the card on click (only once)
  const handleFlip = () => {
    if (!flipped) {
      setFlipped(true);
    }
  };

  // Handle answer button click
  const handleAnswer = (result: 'right' | 'wrong') => {
    setAnswered(result);
    onAnswer && onAnswer(result, card.id);
  };

  return (
    <>
      {/* Card UI with flip animation */}
      <div style={cardStyle} onClick={handleFlip} tabIndex={0}>
        <div style={innerStyle(flipped)}>
          <div style={frontStyle} data-testid="card-front">
            {card.term}
          </div>
          <div style={backStyle} data-testid="card-back">
            <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>{card.translation}</div>
            <div style={{ marginBottom: 6 }}><b>EN:</b> {card.exampleEn}</div>
            <div><b>VI:</b> {card.exampleVi}</div>
            {/* Feedback after answer */}
            {answered && (
              <div style={{ marginTop: 16, fontWeight: 600, color: answered === 'right' ? '#22c55e' : '#ef4444' }}>
                {answered === 'right' ? 'Marked as Right!' : 'Marked as Wrong!'}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Show buttons only after flip and if not answered, outside the card */}
      {flipped && !answered && (
        <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center' }}>
          <button style={{ background: '#ef4444', fontSize: '1.1rem' }} onClick={() => handleAnswer('wrong')}>
            ❌ Wrong (←)
          </button>
          <button style={{ background: '#22c55e', fontSize: '1.1rem' }} onClick={() => handleAnswer('right')}>
            ✅ Right (→)
          </button>
        </div>
      )}
    </>
  );
};

export default Flashcard; 