import React from 'react';

interface AppButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'success' | 'secondary';
  ariaLabel?: string;
  style?: React.CSSProperties;
}

const COLORS = {
  primary: {
    background: '#2563eb',
    hover: '#1d4ed8',
  },
  success: {
    background: '#22c55e',
    hover: '#16a34a',
  },
  secondary: {
    background: '#a21caf',
    hover: '#701a75',
  },
};

export const AppButton: React.FC<AppButtonProps> = ({ label, onClick, color = 'primary', ariaLabel, style }) => {
  const [hover, setHover] = React.useState(false);
  const btnColor = COLORS[color];
  return (
    <button
      aria-label={ariaLabel || label}
      onClick={onClick}
      style={{
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '0.5rem 0',
        width: '220px',
        transition: 'background 0.2s',
        background: hover ? btnColor.hover : btnColor.background,
        ...style,
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      data-testid={`button-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {label}
    </button>
  );
};

export default AppButton; 